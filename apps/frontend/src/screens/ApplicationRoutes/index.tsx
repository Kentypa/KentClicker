import { FC } from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "../HomePage/index.tsx";
import { SignInPage } from "../SignInPage/index.tsx";
import { SignUpPage } from "../SignUpPage/index.tsx";
import { ProfilePage } from "../ProfilePage/index.tsx";
import { RatingPage } from "../RatingPage/index.tsx";
import { MarketPage } from "../MarketPage/index.tsx";
import { ProtectedRoute } from "../../components/UI/ProtectedRoute/index.tsx";
import { useAppSelector } from "../../hooks/redux.ts";
import { userSelector } from "../../stores/selectors/userSelector.ts";
import { WelcomePage } from "../WelcomePage/index.tsx";

export const ApplicationRoutes: FC = () => {
  const { isAuthenticated } = useAppSelector(userSelector);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <HomePage /> : <WelcomePage />}
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
  );
};
