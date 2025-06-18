import { FC } from "react";
import { EditProfileContent } from "../../features/EditProfilePage/components/EditProfileContent";
import { MainContentWrapper } from "@ui/MainContentWrapper";

export const EditProfilePage: FC = () => {
  return (
    <MainContentWrapper>
      <EditProfileContent />
    </MainContentWrapper>
  );
};
