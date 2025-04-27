import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../shared/entities/user.entity";
import { plainToInstance } from "class-transformer";
import { GetUserDto } from "./dto/get-user.dto";
import { EncryptionService } from "src/shared/services/encryption.service";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private encryptionService: EncryptionService,
  ) {}

  async getSafeUser(id: number): Promise<GetUserDto> {
    return plainToInstance(User, await this.getById(id));
  }

  async getById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });

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
}
