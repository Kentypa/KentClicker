import React from "react";
import { FeatureItem } from "../../types/feature-item.ts";
import { UserStatisticElement } from "../UserStatisticElement";

type UserStatsProps = {
  totalCoins: FeatureItem;
  totalClicks: FeatureItem;
};

export const UserStats: React.FC<UserStatsProps> = ({
  totalCoins,
  totalClicks,
}) => {
  return (
    <div className={"flex justify-between w-full max-w-[608px]"}>
      <UserStatisticElement
        img={totalCoins.img}
        name={totalCoins.name}
        description={totalCoins.description}
        className="rounded-l-[10px]"
      />
      <UserStatisticElement
        img={totalClicks.img}
        name={totalClicks.name}
        description={totalClicks.description}
        className="rounded-r-[10px]"
      />
    </div>
  );
};
