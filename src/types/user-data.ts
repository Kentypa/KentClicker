import { FeatureItem } from "./feature-item.ts";

export type UserData = {
  name: string;
  iconBig: string;
  iconSmall: string;
  achievements: FeatureItem[];
  totalCoins: FeatureItem;
  totalClicks: FeatureItem;
};
