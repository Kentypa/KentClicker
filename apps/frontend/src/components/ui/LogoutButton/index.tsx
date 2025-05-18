import { Button } from "../Button";
import { FC, useEffect } from "react";
import { authService } from "../../../services/authService";
import { Queries } from "../../../enums/queriesKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ServiceNames } from "../../../enums/serviceNames";
import LogoutIcon from "../../../assets/icons/logout.svg";
import { useNavigate } from "react-router";
import { PagesEndponts } from "../../../enums/pagesEndpoints";

type LogoutButtonProps = {
  className?: string;
};

export const LogoutButton: FC<LogoutButtonProps> = ({ className }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { logoutUser } = authService(ServiceNames.AUTH);
  const { mutate, isSuccess } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Queries.AUTH, Queries.USER] });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      navigate(PagesEndponts.SIGN_IN);
    }
  });

  return (
    <Button
      handleClick={mutate}
      className={`bg-background rounded-2xl text-label-large ${className}`}>
      <div className="flex flex-row px-5 py-3">
        <div className="flex items-center justify-center size-6 mr-1.5">
          <img
            src={LogoutIcon}
            alt="profile-change"
          />
        </div>
        Logout
      </div>
    </Button>
  );
};
