import { FC, useContext } from "react";
import { UserInfo } from "../UserInfo";
import { UserAchievements } from "../UserAchievements";
import { UserContext } from "../../contexts/user-context.ts";
import { EditProfileButton } from "../EditProfileButton";

export const UserProfile: FC = () => {
  const userInfo = useContext(UserContext);

  return (
    <main className="flex justify-center px-30 pb-30 w-full">
      <div className="flex flex-col max-w-[1200px] pt-10 w-full relative">
        <UserInfo {...userInfo} className="pb-10" />
        <EditProfileButton className="absolute right-0" />
        <UserAchievements achievements={userInfo.achievements} />
      </div>
    </main>
  );
};
