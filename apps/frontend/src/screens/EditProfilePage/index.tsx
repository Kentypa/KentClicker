import { FC } from "react";
import { MainContentWrapper } from "../../components/UI/MainContentWrapper";
import { EditProfileContent } from "../../components/EditProfileContent";

export const EditProfilePage: FC = () => {
  return (
    <MainContentWrapper>
      <EditProfileContent />
    </MainContentWrapper>
  );
};
