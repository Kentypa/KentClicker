import { Input } from "@forms/Input";
import { Label } from "@forms/Label";
import { ChangeEvent, FC, useState } from "react";
import eyeOpened from "@icons/eye-open.svg";
import eyeClosed from "@icons/eye-closed.svg";
import { Button } from "@ui/Button";

type PasswordInputProps = {
  className?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const PasswordInput: FC<PasswordInputProps> = ({
  className,
  handleChange,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className={className}>
      <Label className="mb-2">Password</Label>
      <div className="flex justify-end items-center">
        <Input
          className="rounded-lg border border-subtle-light container p-2.75"
          id="password"
          name="password"
          type={isPasswordVisible ? "text" : "password"}
          autoComplete="on"
          handleChange={handleChange}
        />
        <Button
          handleClick={() => {
            setIsPasswordVisible(!isPasswordVisible);
          }}
          className="absolute mr-3 size-6"
        >
          <img src={isPasswordVisible ? eyeOpened : eyeClosed} alt="eyeIcon" />
        </Button>
      </div>
    </div>
  );
};
