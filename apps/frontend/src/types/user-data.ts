import { FeatureItem } from "./feature-item.ts";

export type UserData = {
  name: string;
  avatar: string;
  achievements: FeatureItem[];
  totalCoins: FeatureItem;
  totalClicks: FeatureItem;
  passiveIncome: FeatureItem;
  isAuthenticated: boolean;
};
