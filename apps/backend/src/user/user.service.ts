import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../shared/entities/user.entity";
import { plainToInstance } from "class-transformer";
import { GetUserDto } from "./dto/get-user.dto";
import { EncryptionService } from "src/shared/services/encryption.service";
import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import * as fs from "fs";
import * as path from "path";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private encryptionService: EncryptionService,
  ) {}

  private readonly logger = new Logger(UserService.name);

  async getSafeUser(id: number): Promise<GetUserDto> {
    return plainToInstance(User, await this.getById(id));
  }

  async getById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async remove(id: number) {
    const user = await this.getById(id);

    return this.userRepository.remove(user);
  }

  async updateRefreshToken(id: number, refreshToken: string) {
    const user = await this.getById(id);

    const newRefreshTokenHashed =
      await this.encryptionService.hashData(refreshToken);

    const updatedUser = this.userRepository.merge(user, {
      refreshToken: newRefreshTokenHashed,
    });

    return this.userRepository.save(updatedUser);
  }

  async update(id: number, dto: UpdateUserDto, avatar?: Express.Multer.File) {
    const user = await this.getById(id);

    if (dto.email) user.email = dto.email;
    if (dto.username) user.username = dto.username;

    if (dto.oldPassword && dto.newPassword) {
      const isOldPasswordValid = await this.encryptionService.compare(
        dto.oldPassword,
        user.password,
      );
      if (!isOldPasswordValid) {
        throw new BadRequestException("Incorrect old password");
      }
      user.password = await this.encryptionService.hashData(dto.newPassword);
    }

    if (avatar && avatar.path) {
      this.logger.log("In first if");
      if (user.avatarUrl) {
        this.logger.log("User have paths");

        const oldPath = path.resolve(user.avatarUrl);
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      user.avatarUrl = path.join(avatar.path);
      this.logger.log(user.avatarUrl);
    }

    return this.userRepository.save(user);
  }
}
