import { ComponentWithChildren } from "@custom-types/component-with-children.ts";

type LabelProps = {
  className?: string;
  htmlFor?: string;
};

export const Label: ComponentWithChildren<LabelProps> = ({
  className,
  htmlFor,
  children,
}) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
