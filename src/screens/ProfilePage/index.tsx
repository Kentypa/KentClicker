import { FC } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { UserProfile } from '../../components/UserProfile';

export const ProfilePage: FC = () => {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <Header />
      <UserProfile />
      <Footer />
    </div>
  );
};
