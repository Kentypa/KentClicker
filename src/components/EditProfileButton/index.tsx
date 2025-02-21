import { Button } from "../Button";
import ProfileChangeIcon from "../../assets/icons/profile-change.svg";
import { FC } from "react";

type EditProfileButtonProps = {
  className?: string;
};

export const EditProfileButton: FC<EditProfileButtonProps> = ({
  className,
}) => {
  return (
    <Button className={`bg-background rounded-2xl font-medium ${className}`}>
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
