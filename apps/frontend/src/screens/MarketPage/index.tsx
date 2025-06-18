import { FC } from "react";
import { MarketContent } from "../../features/MarketPage/components/MarketContent";
import { MainContentWrapper } from "@ui/MainContentWrapper";

export const MarketPage: FC = () => {
  return (
    <MainContentWrapper>
      <MarketContent />
    </MainContentWrapper>
  );
};
