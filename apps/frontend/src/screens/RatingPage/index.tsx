import { FC } from "react";
import { RatingContent } from "../../components/RatingContent";
import { MainContentWrapper } from "../../components/UI/MainContentWrapper";

export const RatingPage: FC = () => {
  return (
    <MainContentWrapper>
      <RatingContent />
    </MainContentWrapper>
  );
};
