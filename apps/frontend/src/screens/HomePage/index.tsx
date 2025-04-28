import { FC } from "react";
import { HomeContent } from "../../components/HomeContent";
import { MainContentWrapper } from "../../components/UI/MainContentWrapper";

export const HomePage: FC = () => {
  return (
    <MainContentWrapper>
      <HomeContent />
    </MainContentWrapper>
  );
};
