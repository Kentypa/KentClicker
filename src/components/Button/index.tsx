import { ComponentWithChildren } from '../../types/component-with-children.tsx';

type buttonTypes = 'submit' | 'button' | 'reset';

type ButtonProps = {
  handleClick?: () => void;
  className?: string;
  type?: buttonTypes;
};

export const Button: ComponentWithChildren<ButtonProps> = ({
  handleClick,
  children,
  className,
  type,
}) => {
  return (
    <button
      className={className}
      onClick={handleClick}
      type={type ?? 'button'}
    >
      {children}
    </button>
  );
};
