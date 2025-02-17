import React from "react";
import { Link } from "react-router";
import Moon from "../../assets/icons/moon.svg";

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center py-4 px-30 w-full bg-subtle-1 mt-auto">
      <div className="flex font-normal w-full justify-between items-center max-w-[422px] m-auto text-white">
        <Link to="/about-game">About game</Link>
        <Link to="/help-center">Help center</Link>
        <Link to="/rules">Rules</Link>
      </div>
      <div className="flex justify-center size-10 items-center rounded-xl border border-subtle-2">
        <img src={Moon} alt="moon" className="size-5" />
      </div>
    </footer>
  );
};
