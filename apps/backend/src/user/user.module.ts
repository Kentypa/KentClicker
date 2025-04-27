import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../shared/entities/user.entity";
import { UserService } from "./user.service";
import { EncryptionService } from "src/shared/services/encryption.service";
import { UserController } from "./user.controller";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, EncryptionService],
  exports: [UserService],
})
export class UserModule {}
