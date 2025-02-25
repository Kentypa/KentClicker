import { FC } from "react";
import { FeatureItem } from "../../types/feature-item.ts";
import { FeatureInfo } from "../FeatureInfo";
import { textFormatter } from "../../utils/text-formatter.ts";

type UserStatsProps = {
  totalCoins: FeatureItem;
  totalClicks: FeatureItem;
};

export const UserStats: FC<UserStatsProps> = ({ totalCoins, totalClicks }) => {
  return (
    <div className={"flex justify-between w-full max-w-[608px]"}>
      <FeatureInfo
        main={textFormatter(totalCoins.name)}
        description={textFormatter(totalCoins.description)}
        icon={totalCoins.img}
        className={`rounded-l-[10px] max-w-[303.5px] bg-background-dark border px-6 py-4`}
        mainClassName="text-white text-headline-small"
        iconClassName="pr-3"
        descriptionClassName="text-background text-body-large"
      />
      <FeatureInfo
        main={textFormatter(totalClicks.name)}
        description={textFormatter(totalClicks.description)}
        icon={totalClicks.img}
        className={`rounded-r-[10px] max-w-[303.5px] bg-background-dark border px-6 py-4`}
        mainClassName="text-white text-headline-small"
        iconClassName="pr-3"
        descriptionClassName="text-background text-body-large"
      />
    </div>
  );
};
