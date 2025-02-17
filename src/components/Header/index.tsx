import React from "react";
import { Logo } from "../Logo";
import { Link } from "react-router";
import { UserPanel } from "../UserPanel";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-30 w-full bg-background">
      <Link to="/">
        <Logo className="h-10 w-[93.75px]" />
      </Link>
      <div className="flex font-normal w-full justify-between items-center max-w-[401px] text-subtle-1">
        <Link to="/">Home</Link>
        <Link to="/market">Market</Link>
        <Link to="/rating">Rating</Link>
      </div>
      <UserPanel />
    </header>
  );
};
