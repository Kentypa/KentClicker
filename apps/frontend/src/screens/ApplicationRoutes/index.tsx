import { FC } from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "@screens/HomePage/index.tsx";
import { SignInPage } from "@screens/SignInPage/index.tsx";
import { SignUpPage } from "@screens/SignUpPage/index.tsx";
import { ProfilePage } from "@screens/ProfilePage/index.tsx";
import { RatingPage } from "@screens/RatingPage/index.tsx";
import { MarketPage } from "@screens/MarketPage/index.tsx";
import { ProtectedRoute } from "@ui/ProtectedRoute/index.tsx";
import { WelcomePage } from "@screens/WelcomePage/index.tsx";
import { EditProfilePage } from "@screens/EditProfilePage/index.tsx";
import { useUserData } from "@hooks/use-user-data.ts";
import { useUserVerify } from "@hooks/use-user-validate.ts";

export const ApplicationRoutes: FC = () => {
  const { isSuccess: isAuthenticated } = useUserVerify();
  const { isSuccess: isUserDataFetched } = useUserData(isAuthenticated);

  return (
    <Routes>
      <Route
        path="/"
        element={isUserDataFetched ? <HomePage /> : <WelcomePage />}
      />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="profile">
          <Route path="" element={<ProfilePage />} />
          <Route path="edit" element={<EditProfilePage />} />
        </Route>
      </Route>
      <Route path="rating/:page?" element={<RatingPage />} />
      <Route path="market/:page?" element={<MarketPage />} />
    </Routes>
  );
};
