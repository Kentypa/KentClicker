import { FC, useMemo } from "react";
import { Title } from "@ui/Title";
import { Link } from "react-router";
import { Button } from "@ui/Button";
import { Divider } from "@ui/Divider";
import { ContinueGoogleButton } from "@ui/ContinueGoogleButton";
import { Input } from "@ui/Input";
import { PasswordInput } from "@ui/PasswordInput";
import { PagesEndponts } from "@enums/pagesEndpoints";
import { useForm } from "@hooks/use-form";
import { useUserData } from "@hooks/use-user-data";
import { useUserVerify } from "@hooks/use-user-validate";
import { useNavigateOnSuccess } from "@hooks/use-navigate-on-success";
import { useSignIn } from "../../hooks/use-sign-in";
import { useSignInPopups } from "../../hooks/use-sign-up-popups";

export const SignInForm: FC = () => {
  const {
    isError: userSignInIsError,
    isSuccess: authIsSuccess,
    mutate,
  } = useSignIn();

  const initialState = useMemo(() => ({ email: "", password: "" }), []);
  const { handleChange, handleSubmit } = useForm(initialState, (formState) => {
    mutate(formState);
  });

  const { isSuccess: userVerifyIsSuccess } = useUserVerify(authIsSuccess);
  const { isSuccess: userDataFetchedSuccess } =
    useUserData(userVerifyIsSuccess);

  useNavigateOnSuccess(userDataFetchedSuccess, PagesEndponts.PROFILE);

  useSignInPopups({ userSignInIsError });

  return (
    <main className="container flex max-w-100 flex-col items-center">
      <Title className="text-display-small mb-12 text-nowrap">
        Welcome to KentClicker
      </Title>
      <p className="text-headline-small mb-8">Sign in</p>
      <form className="container text-subtle-dark" onSubmit={handleSubmit}>
        <div className={`mb-6 flex flex-col`}>
          <Input
            className="p-2.75 rounded-lg border border-subtle-light"
            type="email"
            name="email"
            id="email"
            autoComplete="on"
            label="Email"
            labelClassName="mb-2"
            handleChange={handleChange}
          />
        </div>
        <PasswordInput
          className="relative flex flex-col mb-6"
          handleChange={handleChange}
        />
        <div className="container flex justify-end mb-8">
          <Link to="/" className="text-body-large underline text-primary">
            Forgot password?
          </Link>
        </div>
        <Button
          type="submit"
          className="container p-3 bg-primary text-white text-label-large gap-1.5 rounded-2xl mb-6 "
        >
          Sign in
        </Button>
      </form>
      <div className="text-body-large container flex justify-center mb-8">
        <p>
          Already have an account?{" "}
          <Link to={`/sign-up`} className="underline">
            Sign up
          </Link>
        </p>
      </div>
      <Divider className="mb-8 text-body-medium">or</Divider>
      <ContinueGoogleButton />
    </main>
  );
};
