import { UserAchievement } from "./user-achievement.ts";
import { UserStats } from "./user-stats.ts";

export type UserData = {
  username?: string;
  email: string;
  avatarUrl?: string;
  achievements?: UserAchievement[];
  userStats: UserStats;
  isAuthenticated: boolean | null;
  authLoading: boolean;
};
