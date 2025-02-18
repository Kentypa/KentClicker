import { Title } from "../Title";
import { EditProfileButton } from "../EditProfileButton";
import { UserStats } from "../UserStats";
import { UserData } from "../../types/user-data.ts";
import React from "react";

type UserInfoProps = UserData & { className?: string };

export const UserInfo: React.FC<UserInfoProps> = ({
  totalClicks,
  totalCoins,
  className,
  iconBig,
  name,
}) => {
  return (
    <div className={`flex justify-between ${className}`}>
      <img src={iconBig} alt={"user-logo"} />
      <div className="flex flex-col max-w-[1016px] w-full">
        <div className="flex justify-between">
          <Title className="text-2xl/8">{name}</Title>
          <EditProfileButton />
        </div>
        <UserStats
          totalCoins={totalCoins}
          totalClicks={totalClicks}
        ></UserStats>
      </div>
    </div>
  );
};
