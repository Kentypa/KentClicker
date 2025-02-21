import { FC } from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "../HomePage";
import { SignInPage } from "../SignInPage";
import { SignUpPage } from "../SignUpPage";
import { ProfilePage } from "../ProfilePage";
import { UserContext } from "../../contexts/user-context.ts";
import UndefinedIcon from "../../assets/icons/undefined.svg";
import UserSmallIcon from "../../assets/icons/user-light.svg";
import UserBigIcon from "../../assets/icons/user-dark.svg";

const user = {
  name: "Tony Stark",
  iconBig: UserBigIcon,
  iconSmall: UserSmallIcon,
  achievements: [
    {
      img: UndefinedIcon,
      name: "First Strike",
      description: "Earn your first 1000 ClickCoins",
    },
    {
      img: UndefinedIcon,
      name: "Click Master",
      description: "Reach 1000 Coins per Click",
    },
    {
      img: UndefinedIcon,
      name: "Lightning Fingers",
      description: "Perform 1000 clicks",
    },
    {
      img: UndefinedIcon,
      name: "Golden Tap",
      description: "Achieve 100 Golden Clicks",
    },
    {
      img: UndefinedIcon,
      name: "Click Frenzy",
      description: "Generate 10,000 ClickCoins",
    },
    {
      img: UndefinedIcon,
      name: "Steady Stream",
      description: "Earn 20 ClickCoin per second",
    },
    {
      img: UndefinedIcon,
      name: "Passive Prodigy",
      description: "Reach 10 000 Passive Income",
    },
    {
      img: UndefinedIcon,
      name: "Endless Flow",
      description: "Maintain passive income for 24 hours and more",
    },
  ],
  totalCoins: {
    name: 19247,
    img: UndefinedIcon,
    description: "Total ClickCoins",
  },
  totalClicks: {
    name: 374273475,
    img: UndefinedIcon,
    description: "Total Clicks",
  },
};

export const ApplicationRoutes: FC = () => {
  return (
    <UserContext value={user}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </UserContext>
  );
};
