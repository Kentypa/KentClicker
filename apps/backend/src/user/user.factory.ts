import { Injectable } from "@nestjs/common";
import { UserStats } from "src/shared/entities/user-stats.entity";
import { User } from "src/shared/entities/user.entity";

@Injectable()
export class UserFactory {
  createUser(email: string, hashedPassword: string) {
    const user = new User();
    user.email = email;
    user.password = hashedPassword;
    user.userStats = new UserStats();
    return user;
  }
}
