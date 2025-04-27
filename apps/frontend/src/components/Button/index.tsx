import { ComponentWithChildren } from "../../types/component-with-children.ts";

type ButtonProps = {
  handleClick?: () => void;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

export const Button: ComponentWithChildren<ButtonProps> = ({
  handleClick,
  children,
  className,
  type,
}) => {
  return (
    <button className={className} onClick={handleClick} type={type ?? "button"}>
      {children}
    </button>
  );
};
