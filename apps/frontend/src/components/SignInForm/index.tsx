import { FC, useEffect } from "react";
import { Title } from "../UI/Title";
import { Link, useNavigate } from "react-router";
import { Button } from "../UI/Button";
import { Divider } from "../UI/Divider";
import { ContinueGoogleButton } from "../UI/ContinueGoogleButton";
import { Input } from "../UI/Input";
import { PasswordInput } from "../UI/PasswordInput";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { PagesEndponts } from "../../enums/pagesEndpoints";
import { Queries } from "../../enums/queriesKeys";
import { ServiceNames } from "../../enums/serviceNames";
import { useForm } from "../../hooks/use-form";
import { authService } from "../../services/authService";
import { useAppDispatch } from "../../hooks/redux";
import {
  changeByData,
  changeIsAuthenticated,
} from "../../stores/user/userSlice";
import { userService } from "../../services/userService";
import { Popup } from "../UI/PopUp";

export const SignInForm: FC = () => {
  const navigate = useNavigate();

  const { signInUser } = authService(ServiceNames.AUTH);
  const { getUser } = userService(ServiceNames.USER);

  const queryClient = useQueryClient();

  const {
    error,
    isError,
    isSuccess: authIsSuccess,
    mutate,
  } = useMutation({
    mutationFn: signInUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Queries.AUTH] });
    },
  });

  const {
    data,
    isSuccess: getUserIsSuccess,
    isLoading,
  } = useQuery({
    queryKey: [Queries.USER],
    queryFn: getUser,
    enabled: authIsSuccess,
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

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        dispatch(changeIsAuthenticated(true));
        navigate(PagesEndponts.PROFILE);
      } catch (error) {
        console.error("Cant get user:", error);
      }
    };

    if (authIsSuccess) {
      fetchUserData();
    }
  }, [authIsSuccess, dispatch, navigate, getUser]);

  useEffect(() => {
    if (getUserIsSuccess) {
      if (data) {
        dispatch(changeByData(data.data));
      }
    }
  }, [data, dispatch, isLoading, getUserIsSuccess]);

  return (
    <main className="container flex max-w-100 flex-col items-center">
      {isError && (
        <Popup>
          <h2 className="text-body-medium text-red-500">
            Can`t sign-in, error: {error.message}
          </h2>
        </Popup>
      )}
      <Title className="text-display-small mb-12 text-nowrap">
        Welcome to KentClicker
      </Title>
      <p className="text-headline-small mb-8">Sign in</p>
      <form
        className="container text-subtle-dark"
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
          className="relative flex flex-col mb-6"
          handleChange={handleChange}
        />
        <div className="container flex justify-end mb-8">
          <Link
            to="/"
            className="text-body-large underline text-primary">
            Forgot password?
          </Link>
        </div>
        <Button
          type="submit"
          className="container p-3 bg-primary text-white text-label-large gap-1.5 rounded-2xl mb-6 ">
          Sign in
        </Button>
      </form>
      <div className="text-body-large container flex justify-center mb-8">
        <p>
          Already have an account?{" "}
          <Link
            to={`/sign-up`}
            className="underline">
            Sign up
          </Link>
        </p>
      </div>
      <Divider className="mb-8 text-body-medium">or</Divider>
      <ContinueGoogleButton />
    </main>
  );
};
