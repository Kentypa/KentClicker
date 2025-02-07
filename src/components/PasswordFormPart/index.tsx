import * as React from "react";
import eyeOpened from "../../assets/icons/eye-open.svg";
import eyeClosed from "../../assets/icons/eye-closed.svg";

type PasswordFormPartProps = {
  className?: string;
};

export const PasswordFormPart: React.FC<PasswordFormPartProps> = ({
  className,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <div className={`${className} flex flex-col`}>
      <label className="mb-2" htmlFor="password">
        Password
      </label>
      <div className="flex justify-end">
        <input
          className="h-12 rounded-lg border border-subtle-2 container p-3"
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
    </div>
  );
};
