import * as React from "react";
import logo from "../../assets/images/Logo.jpeg";

type LogoProps = {
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return <img alt="logo" className={`${className} rounded-lg`} src={logo} />;
};
