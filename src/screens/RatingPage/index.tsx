import { FC } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { RatingContent } from '../../components/RatingContent';

export const RatingPage: FC = () => {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <Header />
      <RatingContent />
      <Footer />
    </div>
  );
};
