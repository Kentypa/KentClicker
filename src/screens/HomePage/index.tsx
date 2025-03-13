import { FC } from 'react';
import { HomeContent } from '../../components/HomeContent';
import { PageWithContent } from '../../components/PageWithContent';

export const HomePage: FC = () => {
  return (
    <PageWithContent>
      <HomeContent className='my-10' />
    </PageWithContent>
  );
};
