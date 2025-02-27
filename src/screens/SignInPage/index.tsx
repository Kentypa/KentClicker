import { Logo } from '../../components/Logo';
import { SignInForm } from '../../components/SignInForm';
import { FC } from 'react';

export const SignInPage: FC = () => {
  return (
    <div className='flex w-full flex-col items-center'>
      <Logo className='w-[150px] h-16 mt-20 mb-16' />
      <SignInForm />
    </div>
  );
};
