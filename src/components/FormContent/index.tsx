import { EmailFormPart } from "../EmailFormPart";
import { PasswordFormPart } from "../PasswordFormPart";
import * as React from "react";

export const FormContent: React.FC = () => {
  return (
    <div className={`container text-subtle-1`}>
      <EmailFormPart className="mb-6" />
      <PasswordFormPart className="mb-6" />
    </div>
  );
};
