import React, { useContext } from "react";
import { UserInfo } from "../UserInfo";
import { UserAchievements } from "../UserAchievements";
import { UserContext } from "../../contexts/user-context.ts";

export const UserProfile: React.FC = () => {
  const userInfo = useContext(UserContext);

  return (
    <div className="flex flex-col max-w-[1200px] pt-10 w-full">
      <UserInfo {...userInfo} className="pb-10" />
      <UserAchievements achievements={userInfo.achievements} />
    </div>
  );
};
