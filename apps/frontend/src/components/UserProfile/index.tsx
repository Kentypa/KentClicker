import { FC } from "react";
import { UserInfo } from "../UserInfo/index.tsx";
import { UserAchievements } from "../UserAchievements/index.tsx";
import { EditProfileButton } from "../UI/EditProfileButton/index.tsx";
import { useAppSelector } from "../../hooks/redux.ts";
import { userSelector } from "../../stores/selectors/userSelector.ts";
import { useProfileFeatures } from "../../hooks/use-profile-features.ts";

export const UserProfile: FC = () => {
  const userInfo = useAppSelector(userSelector);
  const userStatistic = useProfileFeatures();

  return (
    <main className="flex justify-center px-30 pb-30 mt-10 w-full">
      <div className="flex flex-col max-w-[1200px] w-full relative">
        <UserInfo
          userCoinsInfo={userStatistic}
          className="mb-10"
          name={userInfo.email}
          avatar={userInfo.avatarUrl}
        />
        <EditProfileButton className="absolute right-0" />
        {userInfo.achievements && (
          <UserAchievements achievements={userInfo.achievements} />
        )}
      </div>
    </main>
  );
};
