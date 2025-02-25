import { ClickerUpgrade } from "../../types/clicker-upgrade.ts";
import { FC } from "react";
import { UpgradeItem } from "../UpgradeItem";

type UpgradesListProps = {
  upgradesList: ClickerUpgrade[];
  className?: string;
};

export const UpgradesList: FC<UpgradesListProps> = ({
  upgradesList,
  className,
}) => {
  return (
    <ul className={className}>
      {upgradesList.map((item) => (
        <UpgradeItem upgrade={item} key={item.name} />
      ))}
    </ul>
  );
};
