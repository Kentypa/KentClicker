import { FC } from "react";
import { UserProfile } from "../../components/UserProfile";
import { MainContentWrapper } from "../../components/UI/MainContentWrapper";

export const ProfilePage: FC = () => {
  return (
    <MainContentWrapper>
      <UserProfile />
    </MainContentWrapper>
  );
};
