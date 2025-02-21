import { FC } from "react";
import { Title } from "../Title";
import { Link } from "react-router";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { ContinueGoogleButton } from "../ContinueGoogleButton";
import { Input } from "../Input";
import { PasswordInput } from "../PasswordInput";

export const SignInForm: FC = () => {
  return (
    <div className="container flex max-w-100 flex-col items-center">
      <Title className="text-[2.5rem]/12 mb-12 font-normal text-nowrap">
        Welcome to KentClicker
      </Title>
      <p className="text-2xl/8 mb-8">Sign in</p>
      <form className="container text-subtle-dark mb-6">
        <div className={`mb-6 flex flex-col`}>
          <Input
            className="p-3 rounded-lg border border-subtle-light"
            type="email"
            name="email"
            id="email"
            autoComplete="on"
            label="Email"
            labelClassName="mb-2"
          />
        </div>
        <PasswordInput className="relative flex flex-col" />
      </form>
      <div className="container flex justify-end mb-8">
        <Link to="/" className="underline">
          Forgot password?
        </Link>
      </div>
      <Button className="container p-3 bg-primary text-white font-medium gap-1.5 rounded-2xl mb-6 cursor-pointer">
        Sign in
      </Button>
      <div className="container flex justify-center mb-8">
        <p>
          Already have an account?{" "}
          <Link to={`/sign-up`} className="underline">
            Sign up
          </Link>
        </p>
      </div>
      <Divider className="mb-6">or</Divider>
      <ContinueGoogleButton />
    </div>
  );
};
