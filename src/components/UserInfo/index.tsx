import { Title } from '../Title';
import { UserStats } from '../UserStats';
import { UserData } from '../../types/user-data.ts';
import { FC } from 'react';

type UserInfoProps = UserData & { className?: string };

export const UserInfo: FC<UserInfoProps> = ({
  totalClicks,
  totalCoins,
  className,
  iconBig,
  name,
}) => {
  const userStats = { userStats: [totalClicks, totalCoins] };

  return (
    <div className={`flex justify-between items-center ${className}`}>
      <img
        src={iconBig}
        alt={'user-logo'}
      />
      <div className='flex flex-col max-w-[1016px] w-full'>
        <Title className='text-headline-small mb-6'>{name}</Title>
        <UserStats
          {...userStats}
          className='max-w-[608px] gap-x-0.25'
          itemClassName='py-4 px-6'
        />
      </div>
    </div>
  );
};
