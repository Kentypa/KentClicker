import { UserAchievement } from "./user-achievement.ts";
import { UserCharacteristics } from "./user-characteristics.ts";
import { UserStats } from "./user-stats.ts";

export type UserData = {
  id?: number;
  username?: string;
  email: string;
  avatarUrl?: string;
  achievements?: UserAchievement[];
  userStats: UserStats;
  userCharacteristics: UserCharacteristics;
  isAuthenticated: boolean | null;
  authLoading: boolean;
};
