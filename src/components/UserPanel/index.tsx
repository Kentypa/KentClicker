import SmallCoin from "../../assets/icons/coin-small.svg";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/user-context.ts";
import { textFormatter } from "../../utils/text-formatter.ts";

export const UserPanel: React.FC = () => {
  const userInfo = useContext(UserContext);

  return (
    <div className="flex flex-row justify-between items-center w-[143px]">
      <img src={userInfo.iconSmall} alt={"user-logo-light"} />
      <div className="">
        <p className="text-subtle-1 mb-0.5">{userInfo.name}</p>
        <div className="flex justify-between items-center w-full gap-0.5">
          <img src={SmallCoin} className="size-5 m-0.5" alt={"small-coin"} />
          <p className="font-medium">
            {textFormatter(userInfo.totalCoins.name)}
          </p>
        </div>
      </div>
    </div>
  );
};
