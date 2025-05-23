import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Queries } from "../enums/queriesKeys";
import { ServiceNames } from "../enums/serviceNames";
import { userService } from "../services/userService";
import { ProfileForm } from "../types/profile-form";

export const useUpdateUser = (email?: string, username?: string) => {
  const { updateUserData } = userService(ServiceNames.USER);
  const queryClient = useQueryClient();
  const { mutate, ...otherOptions } = useMutation({
    mutationFn: updateUserData,
    onSuccess: () => {
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

  return { handleUpdatedUser, ...otherOptions };
};
