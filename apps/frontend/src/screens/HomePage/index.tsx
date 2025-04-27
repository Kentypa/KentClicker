import { FC } from 'react';
import { HomeContent } from '../../components/HomeContent';
import { MainContentWrapper } from '../../components/ui/MainContentWrapper';

export const HomePage: FC = () => {
  return (
    <MainContentWrapper>
      <HomeContent />
    </MainContentWrapper>
  );
};
