import { FC } from 'react';
import { RatingContent } from '../../components/RatingContent';
import { PageWithContent } from '../../components/PageWithContent';

export const RatingPage: FC = () => {
  return (
    <PageWithContent>
      <RatingContent />
    </PageWithContent>
  );
};
