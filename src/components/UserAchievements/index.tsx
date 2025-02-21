import { FeatureItem } from "../../types/feature-item.ts";
import { FC } from "react";
import { FeatureInfo } from "../FeatureInfo";
import { textFormatter } from "../../utils/text-formatter.ts";

type UserAchievementProps = {
  achievements: FeatureItem[];
};

export const UserAchievements: FC<UserAchievementProps> = ({
  achievements,
}) => {
  return (
    <div className="flex flex-col max-w-[1200px] w-full">
      <div className="text-[22px]/7 pb-6">Achievements</div>
      <div className="grid grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <FeatureInfo
            className="rounded-[10px] border border-subtle-light w-full max-w-[384px] p-6"
            main={textFormatter(achievement.name)}
            mainClassName="text-medium"
            description={textFormatter(achievement.description)}
            descriptionClassName="text-subtle-dark truncate"
            icon={achievement.img}
            iconClassName="mr-4"
            key={achievement.name}
          />
        ))}
      </div>
    </div>
  );
};
