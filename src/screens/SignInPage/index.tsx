import { Logo } from "../../components/Logo";
import { SignInForm } from "../../components/SignInForm";

export const SignInPage = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Logo className="w-[150px] h-16 mt-20 mb-16" />
      <SignInForm />
    </div>
  );
};
