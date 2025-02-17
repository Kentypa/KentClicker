import React from "react";

type FeatureInfoProps = {
  icon: string;
  iconClassName?: string;
  description: string;
  descriptionClassName?: string;
  main: string;
  mainClassName?: string;
  className?: string;
};

export const FeatureInfo: React.FC<FeatureInfoProps> = ({
  icon,
  iconClassName,
  description,
  descriptionClassName,
  main,
  mainClassName,
  className,
}) => {
  return (
    <div
      className={`flex justify-between items-center w-full border ${className}`}
    >
      <img className={`size-14 ${iconClassName}`} src={icon} alt="stat-icon" />
      <div className="grid gap-0.5 w-full h-full">
        <p className={`${mainClassName}`}>{main}</p>
        <p className={descriptionClassName}>{description}</p>
      </div>
    </div>
  );
};
