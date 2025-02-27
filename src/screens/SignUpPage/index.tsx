import { Logo } from '../../components/Logo';
import { SignUpForm } from '../../components/SignUpForm';
import { FC } from 'react';

export const SignUpPage: FC = () => {
  return (
    <div className='flex w-full flex-col items-center'>
      <Logo className='w-[150px] h-16 mt-20 mb-16' />
      <SignUpForm />
    </div>
  );
};
