import { FC } from 'react';
import { MarketContent } from '../../components/MarketContent';
import { PageWithContent } from '../../components/PageWithContent';

export const MarketPage: FC = () => {
  return (
    <PageWithContent>
      <MarketContent />
    </PageWithContent>
  );
};
