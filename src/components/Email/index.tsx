import * as React from "react";
import { Label } from "../Label";
import { Input } from "../Input";

type EmailFormPartProps = {
  className?: string;
};

export const Email: React.FC<EmailFormPartProps> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col`}>
      <Label className="mb-2" htmlFor="email">
        Email
      </Label>
      <Input
        className="p-3 rounded-lg border border-subtle-2"
        type="email"
        name="email"
        id="email"
        autoComplete="on"
      />
    </div>
  );
};
