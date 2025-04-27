import { FeatureItem } from "../../types/feature-item.ts";
import { FC } from "react";
import { FeatureInfo } from "../FeatureInfo/index.tsx";
import { textFormatter } from "../../utils/text-formatter.ts";

type UserAchievementProps = {
  achievements: FeatureItem[];
};

export const UserAchievements: FC<UserAchievementProps> = ({
  achievements,
}) => {
  return (
    <div className="flex flex-col max-w-[1200px] w-full">
      <div className="text-title-large pb-6">Achievements</div>
      <ul className="grid grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <FeatureInfo
            className="rounded-lgx border border-subtle-light w-full p-5.75"
            main={textFormatter(achievement.name)}
            mainClassName="text-label-large"
            description={textFormatter(achievement.description)}
            descriptionClassName="text-subtle-dark text-body-large truncate"
            icon={achievement.img}
            iconClassName="mr-4"
            key={achievement.name}
          />
        ))}
      </ul>
    </div>
  );
};
