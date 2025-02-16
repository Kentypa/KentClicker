import * as React from "react";
import { Label } from "../Label";
import { PasswordInput } from "../PasswordInput";

type PasswordProps = {
  className?: string;
};

export const Password: React.FC<PasswordProps> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col`}>
      <Label className={"mb-2"} htmlFor={"password"}>
        Password
      </Label>
      <PasswordInput className="flex justify-end" />
    </div>
  );
};
