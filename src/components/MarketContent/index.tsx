import { FC } from 'react';
import { MarketChart } from '../MarketChart';

export const MarketContent: FC = () => {
  return (
    <main className='flex flex-col w-full max-w-[1440px] px-30 py-10'>
      <div className='p-6 gap-4 flex flex-col'>
        <MarketChart />
      </div>
    </main>
  );
};
