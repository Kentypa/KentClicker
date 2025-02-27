import { ComponentWithChildren } from '../../types/component-with-children.tsx';

type ButtonProps = {
  handleClick?: () => void;
  className?: string;
};

export const Button: ComponentWithChildren<ButtonProps> = ({
  handleClick,
  children,
  className,
}) => {
  return (
    <button
      className={className}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
