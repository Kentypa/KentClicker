import SmallCoin from '../../assets/icons/coin-small.svg';
import { FC, useContext } from 'react';
import { UserContext } from '../../contexts/user-context.ts';
import { textFormatter } from '../../utils/text-formatter.ts';
import { Button } from '../Button/index.tsx';
import { useNavigate } from 'react-router';

export const UserPanel: FC = () => {
  const userInfo = useContext(UserContext);
  const nav = useNavigate();

  return (
    <div className='flex flex-row justify-between items-center w-[143px]'>
      <Button
        handleClick={() => {
          nav('/profile');
        }}>
        <img
          src={userInfo.iconSmall}
          alt={'user-logo-light'}
        />
      </Button>
      <div>
        <p className='text-body-large text-subtle-dark mb-0.5'>{userInfo.name}</p>
        <div className='flex justify-between items-center w-full gap-0.5'>
          <img
            src={SmallCoin}
            className='size-5 m-0.5'
            alt={'small-coin'}
          />
          <p className='text-label-large'>{textFormatter(userInfo.totalCoins.name)}</p>
        </div>
      </div>
    </div>
  );
};
