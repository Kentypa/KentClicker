import { FC, useRef, useState } from 'react';
import { UpgradesList } from '../UpgradesList';
import { ClickerUpgrade } from '../../types/clicker-upgrade';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import ArrowUp from '../../assets/icons/arrow-up.svg';
import { GradientScrollButton } from '../GradientScrollButton';

type ScrollableUpgradeListProps = {
  upgradesList: ClickerUpgrade[];
};

enum ScrollPosition {
  TOP,
  MIDDLE,
  BOTTOM,
}

export const ScrollableUpgradeList: FC<ScrollableUpgradeListProps> = ({ upgradesList }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [scrollPositon, setScrollPosition] = useState<ScrollPosition>(ScrollPosition.TOP);

  const checkScrollPosition = () => {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      if (scrollTop === 0) {
        setScrollPosition(ScrollPosition.TOP);
      } else if (scrollTop + clientHeight >= scrollHeight) {
        setScrollPosition(ScrollPosition.BOTTOM);
      } else {
        setScrollPosition(ScrollPosition.MIDDLE);
      }
    }
  };

  const scrollUp = () => {
    listRef.current?.scrollTo({ top: 0 });
  };

  const scrollDown = () => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  };

  return (
    <div className='relative flex flex-col max-w-[384px] w-full justify-center'>
      <GradientScrollButton
        arrowIcon={ArrowUp}
        scrollDirection={scrollUp}
        visable={scrollPositon === ScrollPosition.BOTTOM}
        buttonClassName='bottom-0'
        gradientClassName='bg-gradient-to-b bottom-0'
      />
      <GradientScrollButton
        arrowIcon={ArrowDown}
        scrollDirection={scrollDown}
        visable={scrollPositon === ScrollPosition.TOP}
        buttonClassName='top-0'
        gradientClassName='bg-gradient-to-t top-0'
      />
      <UpgradesList
        className='[scrollbar-width:none] scroll-smooth max-w-[384px] w-full flex flex-col gap-3 max-h-[726px] overflow-y-auto box-border'
        upgradesList={upgradesList}
        listRef={listRef}
        onScroll={checkScrollPosition}
      />
    </div>
  );
};
