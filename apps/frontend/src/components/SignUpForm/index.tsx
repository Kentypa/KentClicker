import { Title } from "../UI/Title";
import { Link, useNavigate } from "react-router";
import { Button } from "../UI/Button";
import { Divider } from "../UI/Divider";
import { ContinueGoogleButton } from "../UI/ContinueGoogleButton";
import { Input } from "../UI/Input";
import { PasswordInput } from "../UI/PasswordInput";
import { FC, useEffect } from "react";
import { useForm } from "../../hooks/use-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Queries } from "../../enums/queriesKeys";
import { authService } from "../../services/authService";
import { ServiceNames } from "../../enums/serviceNames";
import { PagesEndponts } from "../../enums/pagesEndpoints";
import { Popup } from "../UI/PopUp";

export const SignUpForm: FC = () => {
  const navigate = useNavigate();

  const { signUpUser } = authService(ServiceNames.AUTH);

  const queryClient = useQueryClient();

  const { error, isError, isSuccess, mutate } = useMutation({
    mutationFn: signUpUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Queries.AUTH] });
    },
  });

  const { handleChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    (formState) => {
      mutate(formState);
    },
  );

  useEffect(() => {
    if (isSuccess) {
      navigate(PagesEndponts.SIGN_IN);
    }
  }, [isSuccess, navigate]);

  return (
    <main className={`container flex max-w-100 flex-col items-center`}>
      {isError && (
        <Popup>
          <h2 className="text-body-medium text-red-500">
            Can`t sign-up, error: {error.message}
          </h2>
        </Popup>
      )}
      <Title className="text-display-small mb-12 font-normal text-nowrap">
        Welcome to KentClicker
      </Title>
      <p className="text-headline-small mb-8">Sign up</p>
      <form
        className="container text-subtle-dark mb-6"
        onSubmit={handleSubmit}>
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
          className="relative flex flex-col mb-8"
          handleChange={handleChange}
        />
        <Button
          type="submit"
          className="container p-3 bg-primary text-white text-label-large gap-1.5 rounded-2xl mb-6 ">
          Sign up
        </Button>
      </form>
      <div className="text-body-large container flex justify-center mb-8">
        <p>
          Don’t have account yet?{" "}
          <Link
            to={`/sign-in`}
            className="underline">
            Sign in
          </Link>
        </p>
      </div>
      <Divider className="mb-8 text-body-medium">or</Divider>
      <ContinueGoogleButton />
    </main>
  );
};
