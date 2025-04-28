import { FC } from "react";
import { MarketContent } from "../../components/MarketContent";
import { MainContentWrapper } from "../../components/UI/MainContentWrapper";

export const MarketPage: FC = () => {
  return (
    <MainContentWrapper>
      <MarketContent />
    </MainContentWrapper>
  );
};
