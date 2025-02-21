import { Link } from "react-router";
import { LinkItem } from "../../types/link-item.ts";
import { FC } from "react";

type NavigationProps = {
  menuItems: LinkItem[];
  className?: string;
};

export const Navigation: FC<NavigationProps> = ({ menuItems, className }) => {
  return menuItems.map((item) => (
    <Link className={className} key={item.link} to={item.link}>
      {item.name}
    </Link>
  ));
};
