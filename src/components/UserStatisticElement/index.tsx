import React from "react";
import { FeatureItem } from "../../types/feature-item.ts";
import { FeatureInfo } from "../FeatureInfo";
import { textFormatter } from "../../utils/text-formatter.ts";

type UserStatisticElementProps = FeatureItem & { className?: string };

export const UserStatisticElement: React.FC<UserStatisticElementProps> = ({
  name,
  img,
  description,
  className,
}) => {
  return (
    <FeatureInfo
      main={textFormatter(name)}
      description={textFormatter(description)}
      icon={img}
      className={`${className} max-w-[303.5px] bg-[#43464D] border px-6 py-4`}
      mainClassName="text-white text-2xl/6"
      iconClassName="pr-3"
      descriptionClassName="text-background"
    />
  );
};
