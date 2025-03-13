import { FC, useContext } from 'react';
import { UserContext } from '../../contexts/user-context.ts';
import { UserStats } from '../UserStats/index.tsx';
import { TapButton } from '../TapButton/index.tsx';
import { ScrollableUpgradeList } from '../ScrollableUpgradeList/index.tsx';
import styles from './HomeContent.module.css';

export const HomeContent: FC = () => {
  const userInfo = useContext(UserContext);
  const userStats = {
    userStats: [userInfo.totalClicks, userInfo.totalCoins, userInfo.passiveIncome],
  };

  return (
    <main className='my-10 flex w-full px-30 max-w-[1440px] justify-between'>
      <ScrollableUpgradeList upgradesList={userInfo.upgradesList} />
      <div className='ml-6 flex flex-col w-full'>
        <UserStats
          {...userStats}
          className='gap-x-0.25'
          itemClassName={`p-6 ${styles.customLetter}`}
          itemMainClassName={styles.customLetter}
        />
        <TapButton
          handleClick={() => {}}
          className='self-center mt-[110px] size-100'
        />
      </div>
    </main>
  );
};
