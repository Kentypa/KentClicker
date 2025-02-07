import * as React from "react";
import logo from "../../assets/images/Logo.jpeg";

type LogoProps = {
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img
      alt="logo"
      className={`w-[150px] h-16 ${className} rounded-lg`}
      src={logo}
    />
  );
};
