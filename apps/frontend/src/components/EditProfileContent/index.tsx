import { FC, useMemo } from "react";
import { useAppSelector } from "../../hooks/redux";
import { userSelector } from "../../stores/selectors/userSelector";
import { useForm } from "../../hooks/use-form";
import { AvatarUploader } from "../UI/AvatarUploader";
import { EditableField } from "../UI/EditableField";
import { EditablePassword } from "../UI/EditablePassword";
import { useLogout } from "../../hooks/use-logout";
import { ProfileForm } from "../../types/profile-form";
import { EditProfileActionButtons } from "../UI/EditProfileActionButtons";
import { useUpdateUser } from "../../hooks/use-update-user";
import { useUserAvatarChange } from "../../hooks/use-user-avatar-change";
import { useEditableFields } from "../../hooks/use-editable-fields";
import { PopupList } from "../UI/PopupList";
import { PopupElement } from "../../types/popup-element";

export const EditProfileContent: FC = () => {
  const { mutate: logoutMutate } = useLogout();

  const { email, username, avatarUrl } = useAppSelector(userSelector);

  const {
    handleUpdatedUser,
    isSuccess: userUpdateIsSuccess,
    isError: userUpdateIsError,
    error,
  } = useUpdateUser(email, username);

  const initialState = useMemo(() => ({ email, username }), [email, username]);

  const { formState, handleChangeByValue, handleChange, handleSubmit } =
    useForm<ProfileForm>(initialState, handleUpdatedUser);

  const { editFields, toggleEdit } = useEditableFields({
    email: false,
    username: false,
    password: false,
  });

  const {
    avatarPreview,
    handleAvatarChange,
    isError: avatarLoadingError,
    errorCount: avatarUploadsErrorCounter,
  } = useUserAvatarChange(handleChangeByValue, avatarUrl);

  const popups: PopupElement[] = [
    {
      content: (
        <h2 className="text-body-medium">User info successfully updated!</h2>
      ),
      show: userUpdateIsSuccess,
    },
    {
      content: (
        <h2 className="text-body-medium text-red-500">
          User info can`t be updated!, error: {error?.message}
        </h2>
      ),
      show: userUpdateIsError,
    },
    {
      content: (
        <h2 className="text-body-medium text-red-500">
          User avatar can`t be uploaded!, check file type, its should be image.
        </h2>
      ),
      show: avatarLoadingError,
      key: avatarUploadsErrorCounter,
    },
  ];

  return (
    <main className="my-10 flex w-full justify-center px-30 max-w-[1440px] gap-10">
      <PopupList popups={popups} />
      <form
        className="w-full max-w-200 justify-between items-center"
        onSubmit={handleSubmit}
        encType="multipart/form-data">
        <div className="border border-subtle-light rounded-xl p-3 gap-4 flex flex-col">
          <EditableField
            label="Email"
            name="email"
            value={formState.email}
            isEditing={editFields.email}
            onToggle={() => toggleEdit("email")}
            onChange={handleChange}
          />
          <EditableField
            label="Username"
            name="username"
            value={formState.username}
            isEditing={editFields.username}
            onToggle={() => toggleEdit("username")}
            onChange={handleChange}
          />
          <EditablePassword
            oldPassword={formState.oldPassword}
            newPassword={formState.newPassword}
            isEditing={editFields.password}
            onToggle={() => toggleEdit("password")}
            onChange={handleChange}
          />
          <AvatarUploader
            avatarPreview={avatarPreview}
            onChange={handleAvatarChange}
          />
          <EditProfileActionButtons
            handleLogout={logoutMutate}
            handleDeleteAccount={() => {}}
          />
        </div>
      </form>
    </main>
  );
};
