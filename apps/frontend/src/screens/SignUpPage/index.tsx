import { Logo } from "@ui/Logo";
import { FC } from "react";
import { SignUpForm } from "../../features/SignUpPage/components/SignUpForm";

export const SignUpPage: FC = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Logo className="w-[150px] h-16 mt-20 mb-16" />
      <SignUpForm />
    </div>
  );
};
