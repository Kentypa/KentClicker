import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { compare } from "bcrypt";
import { JwtService, JwtSignOptions } from "@nestjs/jwt";
import { User } from "src/shared/entities/user.entity";
import { ConfigService } from "@nestjs/config";
import { Response } from "express";
import { UserService } from "src/user/user.service";
import { EncryptionService } from "src/shared/services/encryption.service";
import { JwtPayload } from "./types/jwt-payload.type";
import { RegisterUserDto } from "./dto/register-user.dto";
import { calculateTokenExpires } from "./functions/calculate-token-expires.function";
import { UserAccountService } from "src/user/user-account.service";
import { CookieService } from "src/shared/services/cookie.service";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private authRepository: Repository<User>,
    private jwtService: JwtService,
    private configService: ConfigService,
    private userService: UserService,
    private userAccountService: UserAccountService,
    private encryptionService: EncryptionService,
    private cookieService: CookieService,
  ) {}

  private generateTokens(payload: JwtPayload): {
    accessToken: string;
    refreshToken: string;
    expiresAccessToken: Date;
    expiresRefreshToken: Date;
  } {
    const expiresAccessToken = calculateTokenExpires(
      this.configService.getOrThrow<string>("jwt.access_token_expires_in"),
    );

    const expiresRefreshToken = calculateTokenExpires(
      this.configService.getOrThrow<string>("jwt.refresh_token_expires_in"),
    );

    const accessTokenOptions: JwtSignOptions = {
      secret: this.configService.getOrThrow<string>("jwt.access_token_secret"),
      expiresIn: `${this.configService.getOrThrow<string>(
        "jwt.access_token_expires_in",
      )}ms`,
    };

    const refreshTokenOptions: JwtSignOptions = {
      secret: this.configService.getOrThrow<string>("jwt.refresh_token_secret"),
      expiresIn: `${this.configService.getOrThrow<string>(
        "jwt.refresh_token_expires_in",
      )}ms`,
    };

    const accessToken = this.jwtService.sign(payload, accessTokenOptions);
    const refreshToken = this.jwtService.sign(payload, refreshTokenOptions);

    return {
      accessToken,
      refreshToken,
      expiresAccessToken,
      expiresRefreshToken,
    };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.authRepository.findOneBy({ email });

    if (!user) {
      throw new UnauthorizedException("User not found");
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      throw new BadRequestException("Passwords is not match");
    }

    return user;
  }

  async login(
    email: string,
    password: string,
    response: Response,
  ): Promise<void> {
    const user = await this.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const payload: JwtPayload = {
      sub: user.id.toString(),
      username: user.email,
    };

    const tokens = this.generateTokens(payload);

    await this.userService.updateRefreshToken(user.id, tokens.refreshToken);

    this.cookieService.setAuthCookies(
      response,
      tokens.accessToken,
      tokens.refreshToken,
      tokens.expiresAccessToken,
      tokens.expiresRefreshToken,
    );

    return;
  }

  async verifyUserRefreshToken(
    refreshToken: string,
    userId: number,
  ): Promise<User> {
    const user = await this.getById(userId);

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const authenticated = await compare(refreshToken, user.refreshToken);

    if (!authenticated) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async register(user: RegisterUserDto): Promise<User> {
    const existingUser = await this.authRepository.findOne({
      where: { email: user.email },
    });

    if (existingUser) {
      throw new ConflictException("Email already in use");
    }

    const passwordHash = await this.encryptionService.hashData(user.password);

    const newUser = await this.userAccountService.createUserWithStats(
      user.email,
      passwordHash,
    );

    return newUser;
  }

  async getById(id: number): Promise<User> {
    const user = await this.authRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async refresh(user: User, response: Response): Promise<void> {
    const payload: JwtPayload = {
      sub: user.id.toString(),
      username: user.email,
    };

    const tokens = this.generateTokens(payload);

    await this.userService.updateRefreshToken(user.id, tokens.refreshToken);

    this.cookieService.setAuthCookies(
      response,
      tokens.accessToken,
      tokens.refreshToken,
      tokens.expiresAccessToken,
      tokens.expiresRefreshToken,
    );

    return;
  }

  logout(response: Response) {
    this.cookieService.clearAuthCookies(response);
  }

  validateToken(): void {
    return;
  }
}
