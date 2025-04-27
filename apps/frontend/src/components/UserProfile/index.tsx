import { FC, useContext } from "react";
import { UserInfo } from "../UserInfo/index.tsx";
import { UserAchievements } from "../UserAchievements/index.tsx";
import { UserContext } from "../../contexts/user-context.ts";
import { EditProfileButton } from "../ui/EditProfileButton/index.tsx";

export const UserProfile: FC = () => {
  const userInfo = useContext(UserContext);

  return (
    <main className="flex justify-center px-30 pb-30 mt-10 w-full">
      <div className="flex flex-col max-w-[1200px] w-full relative">
        <UserInfo {...userInfo} className="mb-10" />
        <EditProfileButton className="absolute right-0" />
        <UserAchievements achievements={userInfo.achievements} />
      </div>
    </main>
  );
};
