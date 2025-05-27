import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserStats } from "./user-stats.entity";
import { UserCharacteristics } from "./user-characteristics.entity";

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
    example: "Kentik",
    description: "User name",
    type: "string",
  })
  @Column({ type: "varchar", length: 20, unique: true, nullable: true })
  username: string;

  @ApiProperty({
    example: "qwerty1234",
    description: "User password",
    type: "string",
  })
  @Column({ type: "varchar", length: 512 })
  @Exclude()
  password: string;

  @ApiProperty({
    example: "uploads/users/avatars/1748361610393-2ee0737ab7ef.gif",
    description: "Path to user avatar",
    type: "string",
  })
  @Column({ type: "varchar", length: 512, nullable: true })
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

  @OneToOne(() => UserCharacteristics, { eager: true, cascade: true })
  @JoinColumn()
  userCharacteristics: UserCharacteristics;

  @ApiProperty({
    example: "2025-05-27 15:23:48.941416",
    description: "Date of user creating",
    type: Date,
  })
  @CreateDateColumn()
  @Exclude()
  createdAt: Date;

  @ApiProperty({
    example: "2025-05-27 15:23:48.941416",
    description: "Date of user data latest updates",
    type: Date,
  })
  @UpdateDateColumn()
  @Exclude()
  updatedAt: Date;
}
