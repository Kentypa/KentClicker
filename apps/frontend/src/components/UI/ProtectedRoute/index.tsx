import { Navigate, Outlet } from "react-router";
import { LoadingWheel } from "@ui/LoadingWheel";
import { FC } from "react";
import { useAppSelector } from "@hooks/redux";
import { userSelector } from "@selectors/userSelector";

export const ProtectedRoute: FC = () => {
  const { authLoading, isAuthenticated } = useAppSelector(userSelector);

  if (authLoading) {
    return <LoadingWheel />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
};
