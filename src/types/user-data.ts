import { FeatureItem } from "./feature-item.ts";
import { ClickerUpgrade } from "./clicker-upgrade.ts";

export type UserData = {
  name: string;
  iconBig: string;
  iconSmall: string;
  achievements: FeatureItem[];
  totalCoins: FeatureItem;
  totalClicks: FeatureItem;
  passiveIncome: FeatureItem;
  upgradesList: ClickerUpgrade[];
};
