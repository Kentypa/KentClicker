import { Title } from "../Title";
import { Link } from "react-router";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { ContinueGoogleButton } from "../ContinueGoogleButton";
import { Input } from "../Input";
import { PasswordInput } from "../PasswordInput";
import { FC } from "react";

export const SignUpForm: FC = () => {
  return (
    <div className={`container flex max-w-100 flex-col items-center`}>
      <Title className="text-[2.5rem]/12 mb-12 font-normal text-nowrap">
        Welcome to KentClicker
      </Title>
      <p className="text-2xl/8 mb-8">Sign up</p>
      <form className="container text-subtle-dark mb-8">
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
      <Button className="container p-3 bg-primary text-white font-medium gap-1.5 rounded-2xl mb-6 cursor-pointer">
        Sign up
      </Button>
      <div className="container flex justify-center mb-8">
        <p>
          Don’t have account yet?{" "}
          <Link to={`/sign-in`} className="underline">
            Sign in
          </Link>
        </p>
      </div>
      <Divider className="mb-6">or</Divider>
      <ContinueGoogleButton />
    </div>
  );
};
