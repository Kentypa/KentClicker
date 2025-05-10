import { Navigate, Outlet } from "react-router";
import { LoadingWheel } from "../LoadingWheel";
import { useAppSelector } from "../../../hooks/redux";
import { userSelector } from "../../../stores/selectors/userSelector";
import { FC } from "react";

export const ProtectedRoute: FC = () => {
  const { isAuthenticated, authLoading } = useAppSelector(userSelector);

  if (authLoading) {
    return <LoadingWheel />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};
