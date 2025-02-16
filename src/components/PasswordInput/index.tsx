import React from "react";
import eyeOpened from "../../assets/icons/eye-open.svg";
import eyeClosed from "../../assets/icons/eye-closed.svg";
import { Input } from "../Input";

type PasswordInputProps = {
  className?: string;
};

export const PasswordInput: React.FC<PasswordInputProps> = ({ className }) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <div className={className}>
      <Input
        className="rounded-lg border border-subtle-2 container p-3"
        id="password"
        name="password"
        type={isPasswordVisible ? "text" : "password"}
        autoComplete="on"
      />
      <img
        src={isPasswordVisible ? eyeOpened : eyeClosed}
        alt="eyeIcon"
        className="size-6 absolute m-3 cursor-pointer"
        onClick={() => {
          setIsPasswordVisible(!isPasswordVisible);
        }}
      />
    </div>
  );
};
