import { Navigate, Outlet } from "react-router";
import { LoadingWheel } from "../LoadingWheel";
import React, { useEffect, useState } from "react";
import api from "../../../config/axios";

export const ProtectedRoute: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get("/auth/validate");

        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <LoadingWheel />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};
