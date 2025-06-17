import { useEffect } from "react";
import { PopupMessageType } from "../../enums/popupMessageType";
import { useAppDispatch } from "../../hooks/redux";
import { popupsListPush } from "../../stores/popupsList/popupsListSlice";

type UseProfilePopupsOptions = {
  userUpdateIsSuccess: boolean;
  userUpdateIsError: boolean;
  avatarLoadingError: boolean;
  avatarUploadsErrorCounter: number;
  deleteAccountIsError: boolean;
};

export const useProfilePopups = ({
  userUpdateIsSuccess,
  userUpdateIsError,
  avatarLoadingError,
  avatarUploadsErrorCounter,
  deleteAccountIsError,
}: UseProfilePopupsOptions) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userUpdateIsSuccess) {
      const message = "User info successfully updated!";

      dispatch(
        popupsListPush({
          message,
          key: Date.now() + message,
        })
      );
    }
  }, [dispatch, userUpdateIsSuccess]);

  useEffect(() => {
    if (userUpdateIsError) {
      const message = "User info can’t be updated!";

      dispatch(
        popupsListPush({
          message,
          messageType: PopupMessageType.ERROR,
          key: Date.now() + message,
        })
      );
    }
  }, [dispatch, userUpdateIsError]);

  useEffect(() => {
    if (avatarLoadingError) {
      const message = "Avatar upload failed. Only image files are allowed.";

      dispatch(
        popupsListPush({
          message,
          messageType: PopupMessageType.ERROR,
          key: `avatar-error-${avatarUploadsErrorCounter}`,
        })
      );
    }
  }, [avatarLoadingError, avatarUploadsErrorCounter, dispatch]);

  useEffect(() => {
    if (deleteAccountIsError) {
      const message = "Account couldn’t be deleted. Try again.";

      dispatch(
        popupsListPush({
          message,
          messageType: PopupMessageType.ERROR,
          key: Date.now() + message,
        })
      );
    }
  }, [deleteAccountIsError, dispatch]);
};
