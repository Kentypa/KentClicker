import { FC } from 'react';
import { RatingContent } from '../../components/RatingContent';
import { MainContentWrapper } from '../../components/ui/MainContentWrapper';

export const RatingPage: FC = () => {
  return (
    <MainContentWrapper>
      <RatingContent />
    </MainContentWrapper>
  );
};
