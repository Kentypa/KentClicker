import {
  Controller,
  Delete,
  Get,
  HttpCode,
  UseFilters,
  UseGuards,
} from "@nestjs/common";
import { HttpExceptionFilter } from "src/shared/filters/http-exception.filter";
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from "@nestjs/swagger";
import { UserService } from "./user.service";
import { GetUserDto } from "./dto/get-user.dto";
import { User } from "src/shared/entities/user.entity";
import { UserDecorator } from "src/shared/decorators/user.decorator";
import { JwtAuthGuard } from "src/shared/guards/jwt-auth.guard";

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
}
