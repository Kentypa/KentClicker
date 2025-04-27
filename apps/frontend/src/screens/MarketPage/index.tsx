import { FC } from 'react';
import { MarketContent } from '../../components/MarketContent';
import { MainContentWrapper } from '../../components/ui/MainContentWrapper';

export const MarketPage: FC = () => {
  return (
    <MainContentWrapper>
      <MarketContent />
    </MainContentWrapper>
  );
};
