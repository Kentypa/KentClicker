import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { UserStats } from "./user-stats.entity";

@Entity()
export class User {
  @ApiProperty({
    example: "12",
    description: "User ID",
    type: "number",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "test@gmail.com",
    description: "User email",
    type: "string",
  })
  @Column({ type: "varchar", length: 60, unique: true })
  email: string;

  @ApiProperty({
    example: "test@gmail.com",
    description: "User email",
    type: "string",
  })
  @Column({ type: "varchar", length: 60, unique: true, nullable: true })
  username: string;

  @ApiProperty({
    example: "qwerty1234",
    description: "User password",
    type: "string",
  })
  @Column({ type: "varchar", length: 100 })
  @Exclude()
  password: string;

  @ApiProperty({
    example: "/usr/bin/backend/public/images/avatars/174364236-343243image.png",
    description: "Path to user avatar",
    type: "string",
  })
  @Column({ type: "varchar", nullable: true })
  avatarUrl: string;

  @ApiProperty({
    example: "2353reaswdEvc@#W3vAWv4AW$#ca4cAW$caw4vaWEcVAWC3a#Aw3c",
    description: "Hashed refresh token",
    type: "string",
  })
  @Column({ type: "varchar", length: 1024, nullable: true })
  @Exclude()
  refreshToken: string;

  @OneToOne(() => UserStats, { eager: true, cascade: true })
  @JoinColumn()
  userStats: UserStats;
}
