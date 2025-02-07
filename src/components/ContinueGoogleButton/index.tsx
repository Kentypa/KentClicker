import { Button } from "../Button";
import GoogleIcon from "../../assets/icons/google-icon.svg";
import * as React from "react";

export const ContinueGoogleButton: React.FC = () => {
  return (
    <Button className="container flex justify-center items-center h-12 bg-background text-primary font-medium rounded-2xl cursor-pointer">
      <div className="flex items-center justify-center size-6 mr-1.5">
        <img className="size-5" src={GoogleIcon} alt="GoogleIcon" />
      </div>
      <p>Continue with Google</p>
    </Button>
  );
};
