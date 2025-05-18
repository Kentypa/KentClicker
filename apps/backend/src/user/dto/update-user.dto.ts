import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  @ApiProperty({
    example: "test@gmail.com",
    description: "User email",
    type: "string",
  })
  email?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: "kentik",
    description: "User name",
    type: "string",
  })
  username: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: "qwerty1234",
    description: "User old password",
    type: "string",
  })
  oldPassword?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: "1234qwerty",
    description: "User new password",
    type: "string",
  })
  newPassword?: string;
}
