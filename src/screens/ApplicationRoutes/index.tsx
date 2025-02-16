import * as React from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "../HomePage";
import { SignInPage } from "../SignInPage";
import { SignUpPage } from "../SignUpPage";
import { ProfilePage } from "../ProfilePage";

export const ApplicationRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="profile" element={<ProfilePage />} />
    </Routes>
  );
};
