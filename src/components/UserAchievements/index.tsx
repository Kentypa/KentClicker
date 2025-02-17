import { FeatureItem } from "../../types/feature-item.ts";
import React from "react";
import { Achievement } from "../Achievement";

type UserAchievementProps = {
  achievements: FeatureItem[];
};

export const UserAchievements: React.FC<UserAchievementProps> = ({
  achievements,
}) => {
  return (
    <div className="flex flex-col max-w-[1200px] w-full">
      <div className="text-[22px]/7 pb-6">Achievements</div>
      <div className="grid grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <Achievement key={achievement.name} {...achievement} />
        ))}
      </div>
    </div>
  );
};
