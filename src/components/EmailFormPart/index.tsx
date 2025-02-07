import * as React from "react";

type EmailFormPartProps = {
  className?: string;
};

export const EmailFormPart: React.FC<EmailFormPartProps> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col`}>
      <label className="mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="h-12 rounded-lg border border-subtle-2 p-3"
        type="email"
        name="email"
        id="email"
        autoComplete="on"
      />
    </div>
  );
};
