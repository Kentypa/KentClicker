import { FC } from "react";
import { Logo } from "../Logo";
import { Link } from "react-router";
import { UserPanel } from "../UserPanel";
import { Navigation } from "../Navigation";

const menu = [
  { link: "/", name: "Home" },
  { link: "/about", name: "About Us" },
  { link: "/contact", name: "Contact" },
];

export const Header: FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-30 w-full bg-background">
      <Link to="/">
        <Logo className="h-10 w-[93.75px]" />
      </Link>
      <div className="flex font-normal w-full justify-between items-center max-w-[401px] text-subtle-dark">
        <Navigation menuItems={menu} />
      </div>
      <UserPanel />
    </header>
  );
};
