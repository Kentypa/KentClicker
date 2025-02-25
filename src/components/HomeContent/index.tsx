import { FC, useContext } from "react";
import { UpgradesList } from "../UpgradesList";
import { UserContext } from "../../contexts/user-context.ts";

type HomeContentProps = {
  className?: string;
};

export const HomeContent: FC<HomeContentProps> = ({ className }) => {
  const userInfo = useContext(UserContext);

  return (
    <main className={`${className} flex w-full px-40`}>
      <div className="flex flex-col max-w-[1200px] w-full">
        <UpgradesList
          className="max-w-[384px]"
          upgradesList={userInfo.upgradesList}
        />
      </div>
    </main>
  );
};
