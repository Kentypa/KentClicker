import { FC, useContext } from "react";
import { UpgradesList } from "../UpgradesList";
import { UserContext } from "../../contexts/user-context.ts";
import { UserStats } from "../UserStats/index.tsx";
import styles from "./HomeContent.module.css";

type HomeContentProps = {
  className?: string;
};

export const HomeContent: FC<HomeContentProps> = ({ className }) => {
  const userInfo = useContext(UserContext);
  const userStats = {
    userStats: [
      userInfo.totalClicks,
      userInfo.totalCoins,
      userInfo.passiveIncome,
    ],
  };

  return (
    <main className={`${className} flex w-full px-30 justify-between`}>
      <div className="flex flex-col max-w-[384px] w-full">
        <UpgradesList
          className="max-w-[384px]"
          upgradesList={userInfo.upgradesList}
        />
      </div>
      <div className="flex flex-col max-w-[792px] w-full">
        <UserStats
          {...userStats}
          className="gap-x-0.25"
          itemClassName={`p-6 ${styles.customLetter}`}
          itemMainClassName={styles.customLetter}
        />
      </div>
    </main>
  );
};
