import { Button } from "../Button";
import GoogleIcon from "../../assets/icons/google-icon.svg";
import { FC } from "react";

export const ContinueGoogleButton: FC = () => {
  return (
    <Button className="container flex justify-center items-center p-3 bg-background text-primary text-label-large rounded-2xl cursor-pointer">
      <div className="flex items-center justify-center size-6 mr-1.5">
        <img className="size-5" src={GoogleIcon} alt="GoogleIcon" />
      </div>
      <p>Continue with Google</p>
    </Button>
  );
};
