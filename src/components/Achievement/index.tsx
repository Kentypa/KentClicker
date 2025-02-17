import { FeatureItem } from "../../types/feature-item.ts";
import React from "react";
import { FeatureInfo } from "../FeatureInfo";
import { textFormatter } from "../../utils/text-formatter.ts";

type AchievementProps = FeatureItem & { className?: string };

export const Achievement: React.FC<AchievementProps> = ({
  img,
  name,
  description,
  className,
}) => {
  return (
    <FeatureInfo
      className={`${className} rounded-[10px] border border-subtle-2 w-full max-w-[384px] p-6`}
      main={textFormatter(name)}
      mainClassName="text-medium"
      description={textFormatter(description)}
      descriptionClassName="text-subtle-2 truncate"
      icon={img}
      iconClassName="mr-4"
    ></FeatureInfo>
  );
};
