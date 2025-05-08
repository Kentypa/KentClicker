import { FC } from "react";
import { MainContentWrapper } from "../../components/UI/MainContentWrapper";
import { Button } from "../../components/Button";

export const WelcomePage: FC = () => {
  return (
    <MainContentWrapper>
      <div className="flex flex-col gap-10 mt-10">
        <div className="flex flex-col gap-2.5">
          <h1 className="text-headline-large">Welcome to Kent Clicker!</h1>
          <h2 className="text-headline-small">To start play game sign in</h2>
        </div>
        <div>
          <Button className="p-4 bg-subtle-light rounded-xl">Sign in</Button>
        </div>
      </div>
    </MainContentWrapper>
  );
};
