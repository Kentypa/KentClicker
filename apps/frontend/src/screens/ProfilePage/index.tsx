import { FC } from 'react';
import { UserProfile } from '../../components/UserProfile';
import { MainContentWrapper } from '../../components/ui/MainContentWrapper';

export const ProfilePage: FC = () => {
  return (
    <MainContentWrapper>
      <UserProfile />
    </MainContentWrapper>
  );
};
