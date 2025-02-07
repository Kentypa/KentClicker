import * as React from "react";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { WelcomeToClicker } from "../WelcomeToClicker";
import { FormContent } from "../FormContent";
import { ContinueGoogleButton } from "../ContinueGoogleButton";
import { FormType } from "../../types/form-types.ts";
import { Link } from "react-router";

type AuthFormProps = {
  formType: FormType;
};

export const AuthForm: React.FC<AuthFormProps> = ({ formType }) => {
  const isSignIn = formType === FormType.SignIn;
  const signText = isSignIn ? "Sign in" : "Sign up";

  return (
    <div
      className={`container flex max-w-100 h-${isSignIn ? "163" : "151"} flex-col items-center`}
    >
      <WelcomeToClicker />
      <p className="text-2xl/8 mb-8">{signText}</p>
      <FormContent />
      {isSignIn && (
        <div className="container flex justify-end mb-8">
          <Link to="/" className="underline">
            Forgot password?
          </Link>
        </div>
      )}
      <Button className="container h-12 bg-primary text-white font-medium gap-1.5 rounded-2xl mb-6 cursor-pointer">
        {signText}
      </Button>
      <div className="container flex justify-center mb-8">
        <p>
          {isSignIn ? "Already have an account?" : "Don’t have account yet?"}{" "}
          <Link to={`/${isSignIn ? "signup" : "signin"}`} className="underline">
            {isSignIn ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>
      <Divider className="mb-6" />
      <ContinueGoogleButton />
    </div>
  );
};
