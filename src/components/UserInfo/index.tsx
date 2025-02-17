import UserIcon from "../../assets/icons/user-dark.svg";
import { Title } from "../Title";
import { EditProfileButton } from "../EditProfileButton";
import { UserStats } from "../UserStats";
import React from "react";
import { UserStatsProps } from "../UserProfile";

type UserInfoProps = UserStatsProps & { className?: string };

export const UserInfo: React.FC<UserInfoProps> = ({
  totalClicks,
  totalCoins,
  className,
}) => {
  return (
    <div className={`flex justify-between ${className}`}>
      <img src={UserIcon} alt={"user-logo"} />
      <div className="flex flex-col max-w-[1016px] w-full">
        <div className="flex justify-between">
          <Title className="text-2xl/8">Tony Stark</Title>
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
