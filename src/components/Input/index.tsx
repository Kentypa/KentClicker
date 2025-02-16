import { ComponentWithChildren } from "../../types/component-with-children.ts";

type AutoComplete = "on" | "off";

type InputProps = {
  className?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  id?: string;
  autoComplete?: AutoComplete;
};

export const Input: ComponentWithChildren<InputProps> = ({
  className,
  children,
  type,
  id,
  autoComplete,
  name,
  placeholder,
}) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      id={id}
      autoComplete={autoComplete}
      placeholder={placeholder}
    >
      {children}
    </input>
  );
};
