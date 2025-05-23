import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  ParseFilePipeBuilder,
  Patch,
  UploadedFile,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { HttpExceptionFilter } from "src/shared/filters/http-exception.filter";
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiConsumes,
} from "@nestjs/swagger";
import { UserService } from "./user.service";
import { GetUserDto } from "./dto/get-user.dto";
import { User } from "src/shared/entities/user.entity";
import { UserDecorator } from "src/shared/decorators/user.decorator";
import { JwtAuthGuard } from "src/shared/guards/jwt-auth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { Express } from "express";
import { avatarStorage } from "src/config/multer.config";
import { UpdateUserDto } from "./dto/update-user.dto";
import { FileMimeTypeValidator } from "src/shared/validators/file-mime-type.validator";
import { ValidationFilePipe } from "src/shared/pipes/validation-file.pipe";
import {
  MAX_USER_AVATAR_SIZE_IN_BYTES,
  VALID_UPLOADS_MIME_TYPES,
} from "./constants/validation-settings.constant";

@ApiBearerAuth()
@ApiTags("user")
@Controller("user")
@UseFilters(HttpExceptionFilter)
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get("me")
  @ApiOperation({ summary: "Get user by session ID" })
  @ApiResponse({
    status: 200,
    description: "User information",
    type: GetUserDto,
  })
  @HttpCode(200)
  async getCurrentUser(@UserDecorator() user: User): Promise<GetUserDto> {
    return this.userService.getSafeUser(user.id);
  }

  @Delete()
  @ApiOperation({ summary: "Remove user from database" })
  @ApiResponse({
    status: 200,
    description: "User removed successfully",
  })
  @HttpCode(200)
  async removeUser(@UserDecorator() user: User) {
    return this.userService.remove(user.id);
  }

  @Patch("update")
  @ApiConsumes("multipart/form-data")
  @HttpCode(200)
  @ApiOperation({
    summary: "Update user data from database, and uploads avatars to DB",
  })
  @ApiResponse({
    status: 200,
    description: "User successfully updated",
  })
  @UseInterceptors(FileInterceptor("avatar", avatarStorage))
  updateUser(
    @UploadedFile(
      new ValidationFilePipe(
        new ParseFilePipeBuilder()
          .addMaxSizeValidator({
            maxSize: MAX_USER_AVATAR_SIZE_IN_BYTES,
          })
          .addValidator(
            new FileMimeTypeValidator({ fileType: VALID_UPLOADS_MIME_TYPES }),
          )
          .build({
            fileIsRequired: false,
            errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
          }),
      ),
    )
    file: Express.Multer.File,
    @Body() updatedInfo: UpdateUserDto,
    @UserDecorator() user: User,
  ) {
    return this.userService.update(user.id, updatedInfo, file);
  }
}
