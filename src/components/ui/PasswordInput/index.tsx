import { FC, useState } from 'react';
import { Input } from '../Input';
import { Label } from '../Label';
import eyeOpened from '../../../assets/icons/eye-open.svg';
import eyeClosed from '../../../assets/icons/eye-closed.svg';

type PasswordInputProps = {
  className?: string;
};

export const PasswordInput: FC<PasswordInputProps> = ({ className }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className={className}>
      <Label className='mb-2'>Password</Label>
      <div className='flex justify-end items-center'>
        <Input
          className='rounded-lg border border-subtle-light container p-2.75'
          id='password'
          name='password'
          type={isPasswordVisible ? 'text' : 'password'}
          autoComplete='on'
        />
        <img
          src={isPasswordVisible ? eyeOpened : eyeClosed}
          alt='eyeIcon'
          className='absolute mr-3 size-6 '
          onClick={() => {
            setIsPasswordVisible(!isPasswordVisible);
          }}
        />
      </div>
    </div>
  );
};
