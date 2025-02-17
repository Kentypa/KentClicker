import React from "react";
import UndefinedIcon from "../../assets/icons/undefined.svg";
import { FeatureItem } from "../../types/feature-item.ts";
import { UserInfo } from "../UserInfo";
import { UserAchievements } from "../UserAchievements";

export type UserStatsProps = {
  name: string;
  iconBig: string;
  iconSmall: string;
  achievements: FeatureItem[];
  totalCoins: FeatureItem;
  totalClicks: FeatureItem;
};

const userInfo: UserStatsProps = {
  name: "Tony Stark",
  iconBig: "",
  iconSmall: "",
  achievements: [
    {
      img: UndefinedIcon,
      name: "First Strike",
      description: "Earn your first 1000 ClickCoins",
    },
    {
      img: UndefinedIcon,
      name: "Click Master",
      description: "Reach 1000 Coins per Click",
    },
    {
      img: UndefinedIcon,
      name: "Lightning Fingers",
      description: "Perform 1000 clicks",
    },
    {
      img: UndefinedIcon,
      name: "Golden Tap",
      description: "Achieve 100 Golden Clicks",
    },
    {
      img: UndefinedIcon,
      name: "Click Frenzy",
      description: "Generate 10,000 ClickCoins",
    },
    {
      img: UndefinedIcon,
      name: "Steady Stream",
      description: "Earn 20 ClickCoin per second",
    },
    {
      img: UndefinedIcon,
      name: "Passive Prodigy",
      description: "Reach 10 000 Passive Income",
    },
    {
      img: UndefinedIcon,
      name: "Endless Flow",
      description: "Maintain passive income for 24 hours and more",
    },
  ],
  totalCoins: {
    name: 19247,
    img: UndefinedIcon,
    description: "Total ClickCoins",
  },
  totalClicks: {
    name: 374273475,
    img: UndefinedIcon,
    description: "Total Clicks",
  },
};

export const UserProfile: React.FC = () => {
  return (
    <div className="flex flex-col max-w-[1200px] pt-10 w-full">
      <UserInfo {...userInfo} className="pb-10" />
      <UserAchievements achievements={userInfo.achievements} />
    </div>
  );
};
