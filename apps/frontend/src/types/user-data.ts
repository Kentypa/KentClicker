import { UserAchievement } from "./user-achievement.ts";
import { UserStats } from "./user-stats.ts";

export type UserData = {
  name?: string;
  email: string;
  avatar?: string;
  achievements?: UserAchievement[];
  userStats: UserStats;
  isAuthenticated: boolean | null;
  authLoading: boolean;
};
