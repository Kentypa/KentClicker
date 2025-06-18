import { FC } from "react";
import { Logo } from "@ui/Logo";
import { Link, useNavigate } from "react-router";
import { UserPanel } from "@components/UserPanel";
import { Navigation } from "@ui/Navigation";
import { useAppSelector } from "@hooks/redux";
import { userSelector } from "@selectors/userSelector";
import { Button } from "@ui/Button";
import { PagesEndponts } from "@enums/pagesEndpoints";

const menu = [
  { link: "/", name: "Home" },
  { link: "/market", name: "Market" },
  { link: "/rating", name: "Rating" },
];

export const Header: FC = () => {
  const { isAuthenticated } = useAppSelector(userSelector);

  const nav = useNavigate();

  const handleClick = () => {
    nav(PagesEndponts.SIGN_IN);
  };

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
        <Button
          className="bg-subtle-light p-2 rounded-xl"
          handleClick={handleClick}
        >
          Sign in
        </Button>
      )}
    </header>
  );
};
