import { ClickerUpgrade } from '../../types/clicker-upgrade.ts';
import { FC } from 'react';
import { UpgradeItem } from '../ui/UpgradeItem/index.tsx';

type UpgradesListProps = {
  upgradesList: ClickerUpgrade[];
  className?: string;
  listRef?: React.RefObject<HTMLUListElement | null>;
  onScroll?: () => void;
};

export const UpgradesList: FC<UpgradesListProps> = ({
  upgradesList,
  className,
  listRef,
  onScroll,
}) => {
  return (
    <ul
      ref={listRef}
      className={className}
      onScroll={onScroll}>
      {upgradesList.map((item) => (
        <UpgradeItem
          upgrade={item}
          key={item.name}
        />
      ))}
    </ul>
  );
};
