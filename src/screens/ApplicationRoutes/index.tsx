import * as React from "react";
import { Route, Routes } from "react-router";
import { SignInPage } from "../../components/SignInPage";
import { HomePage } from "../../components/HomePage";
import { SignUpPage } from "../../components/SignUpPage";

export const ApplicationRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
    </Routes>
  );
};
