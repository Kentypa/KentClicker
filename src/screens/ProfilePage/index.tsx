import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Footer />
    </div>
  );
};
