import { FC, useState, ChangeEvent } from "react";
import { useAppSelector } from "../../hooks/redux";
import { userSelector } from "../../stores/selectors/userSelector";
import { useForm } from "../../hooks/use-form";
import { Button } from "../UI/Button";
import { LogoutButton } from "../UI/LogoutButton";
import { AvatarUploader } from "../UI/AvatarUploader";
import { EditableField } from "../UI/EditableField";
import { EditablePassword } from "../UI/EditablePassword";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "../../services/userService";
import { ServiceNames } from "../../enums/serviceNames";
import { Queries } from "../../enums/queriesKeys";
import { Popup } from "../UI/PopUp";

type ProfileForm = {
  email: string;
  username?: string;
  avatar?: File;
  oldPassword?: string;
  newPassword?: string;
};

export const EditProfileContent: FC = () => {
  const { email, username, avatarUrl } = useAppSelector(userSelector);
  const [avatarPreview, setAvatarPreview] = useState<string>(avatarUrl || "");
  const { updateUserData } = userService(ServiceNames.USER);
  const queryClient = useQueryClient();
  const { isSuccess, isError, error, mutate } = useMutation({
    mutationFn: updateUserData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Queries.USER] });
    },
  });

  const { formState, handleChangeByValue, handleChange, handleSubmit } =
    useForm<ProfileForm>({ email, username }, (data) => {
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
      console.log("Submitting FormData:", [...formData.entries()]);

      mutate(formData);
    });

  const [editFields, setEditFields] = useState({
    email: false,
    username: false,
    password: false,
  });

  const toggleEdit = (field: keyof typeof editFields) =>
    setEditFields((prev) => ({ ...prev, [field]: !prev[field] }));

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleChangeByValue("avatar", file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <main className="my-10 flex w-full justify-center px-30 max-w-[1440px] gap-10">
      {isSuccess && (
        <Popup>
          <h2 className="text-body-medium">User info successfully updated!</h2>
        </Popup>
      )}
      {isError && (
        <Popup>
          <h2 className="text-body-medium text-red-500">
            User info can`t be updated!, error: {error.message}
          </h2>
        </Popup>
      )}
      <form
        className="w-full max-w-200 justify-between items-center"
        onSubmit={handleSubmit}
        encType="multipart/form-data">
        <div className="border border-subtle-light rounded-xl p-3 gap-4 flex flex-col">
          <EditableField
            label="Email"
            name="email"
            value={formState.email || ""}
            isEditing={editFields.email}
            onToggle={() => toggleEdit("email")}
            onChange={handleChange}
          />
          <EditableField
            label="Username"
            name="username"
            value={formState.username || ""}
            isEditing={editFields.username}
            onToggle={() => toggleEdit("username")}
            onChange={handleChange}
          />
          <EditablePassword
            oldPassword={formState.oldPassword || ""}
            newPassword={formState.newPassword || ""}
            isEditing={editFields.password}
            onToggle={() => toggleEdit("password")}
            onChange={handleChange}
          />
          <AvatarUploader
            avatarPreview={avatarPreview}
            onChange={handleAvatarChange}
          />
          <Button
            type="submit"
            className="mt-4 self-end p-3 bg-primary rounded-2xl text-white">
            Save Changes
          </Button>
        </div>
      </form>
      <LogoutButton />
    </main>
  );
};
