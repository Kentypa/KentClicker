import { Button } from "../Button";
import ProfileChangeIcon from "../../assets/icons/profile-change.svg";
import React from "react";

export const EditProfileButton: React.FC = () => {
  return (
    <Button className="bg-background rounded-2xl font-medium">
      <div className="flex flex-row px-5 py-3">
        <div className="flex items-center justify-center size-6 mr-1.5">
          <img
            src={ProfileChangeIcon}
            className="w-[19.5px] h-[19px]"
            alt="profile-change"
          />
        </div>
        Edit profile
      </div>
    </Button>
  );
};
