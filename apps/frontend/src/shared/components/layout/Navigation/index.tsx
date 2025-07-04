import { LinkItem } from "@shared-types/link-item";
import { FC } from "react";
import { NavLink } from "react-router";

type NavigationProps = {
  menuItems: LinkItem[];
  className?: string | ((isActive: boolean) => string);
};

export const Navigation: FC<NavigationProps> = ({ menuItems, className }) => {
  return (
    <>
      {menuItems.map((item) => (
        <NavLink
          key={item.link}
          to={item.link}
          className={({ isActive }) =>
            typeof className === "function" ? className(isActive) : className
          }
        >
          {item.name}
        </NavLink>
      ))}
    </>
  );
};
