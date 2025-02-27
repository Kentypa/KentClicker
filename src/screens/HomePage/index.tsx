import { FC } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { HomeContent } from '../../components/HomeContent';

export const HomePage: FC = () => {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <Header />
      <HomeContent className='my-10' />
      <Footer />
    </div>
  );
};
