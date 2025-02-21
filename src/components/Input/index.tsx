import { Label } from "../Label";
import { FC } from "react";

type AutoComplete = "on" | "off";

type InputProps = {
  className?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  id?: string;
  autoComplete?: AutoComplete;
  label?: string;
  labelClassName?: string;
};

export const Input: FC<InputProps> = ({
  className,
  type,
  id,
  autoComplete,
  name,
  placeholder,
  label,
  labelClassName,
}) => {
  return (
    <>
      {label && (
        <Label className={labelClassName} htmlFor={id}>
          {label}
        </Label>
      )}
      <input
        className={className}
        type={type}
        name={name}
        id={id}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
    </>
  );
};
