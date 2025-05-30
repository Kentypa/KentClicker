import { Button } from "../Button";
import { FC } from "react";
import { useNavigate } from "react-router";
import { PagesEndponts } from "../../../enums/pagesEndpoints";
import ProfileChangeIcon from "../../../assets/icons/profile-change.svg";

type EditProfileButtonProps = {
  className?: string;
};

export const EditProfileButton: FC<EditProfileButtonProps> = ({
  className,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(PagesEndponts.EDIT_PROFILE);
  };

  return (
    <Button
      handleClick={handleClick}
      className={`bg-background rounded-2xl text-label-large ${className}`}>
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
