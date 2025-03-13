import { FC } from 'react';
import { UserProfile } from '../../components/UserProfile';
import { PageWithContent } from '../../components/PageWithContent';

export const ProfilePage: FC = () => {
  return (
    <PageWithContent>
      <UserProfile />
    </PageWithContent>
  );
};
