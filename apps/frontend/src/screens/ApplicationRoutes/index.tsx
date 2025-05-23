import { FC } from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "../HomePage/index.tsx";
import { SignInPage } from "../SignInPage/index.tsx";
import { SignUpPage } from "../SignUpPage/index.tsx";
import { ProfilePage } from "../ProfilePage/index.tsx";
import { RatingPage } from "../RatingPage/index.tsx";
import { MarketPage } from "../MarketPage/index.tsx";
import { ProtectedRoute } from "../../components/UI/ProtectedRoute/index.tsx";
import { WelcomePage } from "../WelcomePage/index.tsx";
import { EditProfilePage } from "../EditProfilePage/index.tsx";
import { useUserData } from "../../hooks/use-user-data.ts";
import { useUserVerify } from "../../hooks/use-user-validate.ts";

export const ApplicationRoutes: FC = () => {
  const { isSuccess: isAuthenticated } = useUserVerify();
  const { isSuccess: isUserDataFetched } = useUserData(isAuthenticated);

  return (
    <Routes>
      <Route
        path="/"
        element={isUserDataFetched ? <HomePage /> : <WelcomePage />}
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
        <Route
          path="edit-profile"
          element={<EditProfilePage />}
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
