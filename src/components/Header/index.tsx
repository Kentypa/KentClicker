import React from "react";
import { Logo } from "../Logo";
import { Link } from "react-router";
import UserLogo from "../../assets/icons/user-light.svg";
import SmallCoin from "../../assets/icons/coin-small.svg";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-30 bg-background">
      <Link to="/">
        <Logo className="h-10 w-[93.75px]" />
      </Link>
      <div className="flex font-normal w-full justify-between items-center max-w-[401px]">
        <Link to="/" className="text-subtle-1">
          Home
        </Link>
        <Link to="/market" className="text-subtle-1">
          Market
        </Link>
        <Link to="/rating" className="text-subtle-1">
          Rating
        </Link>
      </div>
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
    </header>
  );
};
