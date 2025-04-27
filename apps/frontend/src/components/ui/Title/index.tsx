import { ComponentWithChildren } from '../../../types/component-with-children.ts';

type TitleProps = {
  className?: string;
};

export const Title: ComponentWithChildren<TitleProps> = ({ className, children }) => {
  return <h1 className={className}>{children}</h1>;
};
