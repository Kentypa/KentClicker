import { FC } from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "../HomePage/index.tsx";
import { SignInPage } from "../SignInPage/index.tsx";
import { SignUpPage } from "../SignUpPage/index.tsx";
import { ProfilePage } from "../ProfilePage/index.tsx";
import { RatingPage } from "../RatingPage/index.tsx";
import { UserContext } from "../../contexts/user-context.ts";
import { MarketPage } from "../MarketPage/index.tsx";
import { user } from "./user.mock.ts";
import { ProtectedRoute } from "../../components/UI/ProtectedRoute/index.tsx";

export const ApplicationRoutes: FC = () => {
  return (
    <UserContext value={user}>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="sign-in"
          element={<SignInPage />}
        />
        <Route
          path="sign-up"
          element={<SignUpPage />}
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="profile"
            element={<ProfilePage />}
          />
        </Route>
        <Route
          path="rating/:page?"
          element={<RatingPage />}
        />
        <Route
          path="market/:page?"
          element={<MarketPage />}
        />
        <Route
          path="market/:page?"
          element={<MarketPage />}
        />
      </Routes>
    </UserContext>
  );
};
