import { FC } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { MarketContent } from '../../components/MarketContent';

export const MarketPage: FC = () => {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <Header />
      <MarketContent />
      <Footer />
    </div>
  );
};
