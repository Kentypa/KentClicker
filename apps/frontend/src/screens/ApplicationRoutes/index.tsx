import { FC, useEffect } from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "../HomePage/index.tsx";
import { SignInPage } from "../SignInPage/index.tsx";
import { SignUpPage } from "../SignUpPage/index.tsx";
import { ProfilePage } from "../ProfilePage/index.tsx";
import { RatingPage } from "../RatingPage/index.tsx";
import { MarketPage } from "../MarketPage/index.tsx";
import { ProtectedRoute } from "../../components/UI/ProtectedRoute/index.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.ts";
import { userSelector } from "../../stores/selectors/userSelector.ts";
import { WelcomePage } from "../WelcomePage/index.tsx";
import { useQuery } from "@tanstack/react-query";
import { Queries } from "../../enums/queriesKeys.ts";
import { ServiceNames } from "../../enums/serviceNames.ts";
import { userService } from "../../services/userService.ts";
import { changeByData } from "../../stores/user/userSlice.ts";

export const ApplicationRoutes: FC = () => {
  const { getUser } = userService(ServiceNames.USER);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [Queries.USER],
    queryFn: getUser,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        dispatch(changeByData(data.data));
      }
    }
  }, [data, dispatch, isLoading, isSuccess]);

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
