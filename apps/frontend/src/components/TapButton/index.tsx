import { FC } from "react";
import { Button } from "../UI/Button";
import TapButtonIcon from "../../assets/icons/tap-button-image.svg";

type TapButtonProps = {
  handleClick: () => void;
  className?: string;
};

export const TapButton: FC<TapButtonProps> = ({ handleClick, className }) => {
  return (
    <Button
      handleClick={handleClick}
      className={className}>
      <img
        src={TapButtonIcon}
        alt="TabButtonIcon"
      />
    </Button>
  );
};
