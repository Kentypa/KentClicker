import { Logo } from "../Logo";
import { AuthForm } from "../AuthForm";
import { FormType } from "../../types/form-types.ts";

export const SignUpPage = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Logo className="mt-20 mb-16" />
      <AuthForm formType={FormType.SignUp} />
    </div>
  );
};
