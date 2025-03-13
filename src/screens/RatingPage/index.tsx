import { FC } from 'react';
import { RatingContent } from '../../components/RatingContent';
import { MainContentWrapper } from '../../components/MainContentWrapper';

export const RatingPage: FC = () => {
  return (
    <MainContentWrapper>
      <RatingContent />
    </MainContentWrapper>
  );
};
