import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Queries } from "@enums/queriesKeys";
import { ServiceNames } from "@enums/serviceNames";
import { userService } from "@services/userService";
import { ProfileForm } from "@custom-types/profile-form";
import { useAppDispatch } from "./redux";
import { changeByData } from "@stores/user/userSlice";
import { UserData } from "@custom-types/user-data";

export const useUpdateUser = (email?: string, username?: string) => {
  const { updateUserData } = userService(ServiceNames.USER);
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { mutate, isSuccess, ...otherOptions } = useMutation<
    UserData,
    Error,
    FormData
  >({
    mutationFn: updateUserData,
    onSuccess: (updatedUser) => {
      dispatch(
        changeByData({
          ...updatedUser,
          avatarUrl: updatedUser.avatarUrl
            ? `http://localhost:3000/${updatedUser.avatarUrl}`
            : "",
        })
      );
      queryClient.refetchQueries({ queryKey: [Queries.USER] });
    },
  });

  const handleUpdatedUser = (data: ProfileForm) => {
    const formData = new FormData();
    if (data.email && data.email.trim() && data.email !== email)
      formData.append("email", data.email);
    if (data.username && data.username.trim() && data.username !== username)
      formData.append("username", data.username);
    if (data.avatar instanceof File) formData.append("avatar", data.avatar);
    if (data.oldPassword && data.newPassword) {
      formData.append("oldPassword", data.oldPassword);
      formData.append("newPassword", data.newPassword);
    }

    mutate(formData);
  };

  return { handleUpdatedUser, isSuccess, ...otherOptions };
};
