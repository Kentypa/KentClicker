import { FC } from "react";
import { UserProfile } from "../../features/ProfilePage/components/UserProfile";
import { MainContentWrapper } from "@ui/MainContentWrapper";

export const ProfilePage: FC = () => {
  return (
    <MainContentWrapper>
      <UserProfile />
    </MainContentWrapper>
  );
};
