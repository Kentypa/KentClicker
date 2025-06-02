import { FC } from "react";
import { EditProfileContent } from "../../components/EditProfileContent";
import { MainContentWrapper } from "../../components/UI/MainContentWrapper";

export const EditProfilePage: FC = () => {
  return (
    <MainContentWrapper>
      <EditProfileContent />
    </MainContentWrapper>
  );
};
