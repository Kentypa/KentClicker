import logo from '../../assets/images/logo-main.jpeg';
import { FC } from 'react';

type LogoProps = {
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <img
      alt='logo'
      className={`${className} rounded-lg`}
      src={logo}
    />
  );
};
