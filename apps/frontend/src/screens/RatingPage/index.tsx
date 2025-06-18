import { FC } from "react";
import { RatingContent } from "../../features/RatingPage/components/RatingContent";
import { MainContentWrapper } from "@ui/MainContentWrapper";

export const RatingPage: FC = () => {
  return (
    <MainContentWrapper>
      <RatingContent />
    </MainContentWrapper>
  );
};
