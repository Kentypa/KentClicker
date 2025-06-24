import { RecoveryAccountForm } from "@features/RecoveryAccountPage/components/forms/SignInForm";
import { Logo } from "@ui/Logo";
import { FC } from "react";

export const RecoveryAccountPage: FC = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Logo className="w-[150px] h-16 mt-20 mb-16" />
      <RecoveryAccountForm />
    </div>
  );
};
