import { FC } from "react";
import { UserInfo } from "../UserInfo/index.tsx";
import { UserAchievements } from "../UserAchievements/index.tsx";
import { EditProfileButton } from "../UI/EditProfileButton/index.tsx";
import { useAppSelector } from "../../hooks/redux.ts";
import { userSelector } from "../../stores/selectors/userSelector.ts";

export const UserProfile: FC = () => {
  const userInfo = useAppSelector(userSelector);

  return (
    <main className="flex justify-center px-30 pb-30 mt-10 w-full">
      <div className="flex flex-col max-w-[1200px] w-full relative">
        <UserInfo
          {...userInfo}
          className="mb-10"
        />
        <EditProfileButton className="absolute right-0" />
        <UserAchievements achievements={userInfo.achievements} />
      </div>
    </main>
  );
};
