import { FC } from "react";
import { UserStats } from "../UserStats/index.tsx";
import { TapButton } from "../TapButton/index.tsx";
import { ScrollableUpgradeList } from "../ScrollableUpgradeList/index.tsx";
import { useAppSelector } from "../../hooks/redux.ts";
import { userSelector } from "../../stores/selectors/userSelector.ts";
import styles from "./HomeContent.module.css";
import { upgradeList } from "./upgradeList.mock.ts";

export const HomeContent: FC = () => {
  const userInfo = useAppSelector(userSelector);
  const userStats = {
    userStats: [
      userInfo.totalClicks,
      userInfo.totalCoins,
      userInfo.passiveIncome,
    ],
  };

  return (
    <main className="my-10 flex w-full px-30 max-w-[1440px] justify-between">
      <ScrollableUpgradeList upgradesList={upgradeList} />
      <div className="ml-6 flex flex-col w-full">
        <UserStats
          {...userStats}
          className="gap-x-0.25"
          itemClassName={`p-6 ${styles.customLetter}`}
          itemMainClassName={styles.customLetter}
        />
        <TapButton
          handleClick={() => {}}
          className="self-center mt-[110px] size-100"
        />
      </div>
    </main>
  );
};
