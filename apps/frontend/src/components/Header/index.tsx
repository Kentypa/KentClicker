import { FC } from "react";
import { Logo } from "../UI/Logo";
import { Link } from "react-router";
import { UserPanel } from "../UserPanel";
import { Navigation } from "../UI/Navigation";
import { useAppSelector } from "../../hooks/redux";
import { userSelector } from "../../stores/selectors/userSelector";
import { Button } from "../UI/Button";

const menu = [
  { link: "/", name: "Home" },
  { link: "/market", name: "Market" },
  { link: "/rating", name: "Rating" },
];

export const Header: FC = () => {
  const { isAuthenticated } = useAppSelector(userSelector);

  return (
    <header className="flex justify-between items-center py-4 px-30 w-full bg-background">
      <Link to="/">
        <Logo className="h-10 w-[93.75px]" />
      </Link>
      <div className="flex w-full justify-between items-center max-w-[401px]">
        <Navigation
          menuItems={menu}
          className={(isActive) =>
            isActive
              ? "text-label-large text-primary"
              : "text-body-large text-subtle-dark"
          }
        />
      </div>
      {isAuthenticated ? (
        <UserPanel />
      ) : (
        <Button className="bg-subtle-light p-2 rounded-xl">Sign in</Button>
      )}
    </header>
  );
};
