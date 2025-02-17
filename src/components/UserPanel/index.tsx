import UserLogo from "../../assets/icons/user-light.svg";
import SmallCoin from "../../assets/icons/coin-small.svg";
import React from "react";

export const UserPanel: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center w-[143px]">
      <img src={UserLogo} alt={"user-logo-light"} />
      <div className="">
        <p className="text-subtle-1 mb-0.5">Tony Stark</p>
        <div className="flex justify-between items-center w-full gap-0.5">
          <img src={SmallCoin} className="size-5 m-0.5" alt={"small-coin"} />
          <p className="font-medium">19 247</p>
        </div>
      </div>
    </div>
  );
};
