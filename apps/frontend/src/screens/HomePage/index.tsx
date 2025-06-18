import { FC } from "react";
import { HomeContent } from "../../features/HomePage/components/HomeContent";
import { MainContentWrapper } from "@ui/MainContentWrapper";

export const HomePage: FC = () => {
  return (
    <MainContentWrapper>
      <HomeContent />
    </MainContentWrapper>
  );
};
