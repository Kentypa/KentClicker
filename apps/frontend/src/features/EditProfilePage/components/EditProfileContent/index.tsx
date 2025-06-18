import { FC, useMemo } from "react";
import { useAppSelector } from "@hooks/redux";
import { userSelector } from "@selectors/userSelector";
import { useForm } from "@hooks/use-form";
import { EditableField } from "@ui/EditableField";
import { EditablePassword } from "@ui/EditablePassword";
import { ProfileForm } from "@custom-types/profile-form";
import { useUpdateUser } from "@hooks/use-update-user";
import { useEditableFields } from "@hooks/use-editable-fields";
import { EditProfileActionButtons } from "../UI/EditProfileActionButtons";
import { useLogout } from "../../hooks/use-logout";
import { useUserAvatarChange } from "../../hooks/use-user-avatar-change";
import { useDeleteAccount } from "../../hooks/use-delete-account";
import { useEditProfilePopups } from "../../hooks/use-edit-page-popups";
import { DeleteAccountModal } from "../DeleteAccountModal";
import { AvatarUploader } from "../UI/AvatarUploader";

export const EditProfileContent: FC = () => {
  const { mutate: logoutMutate } = useLogout();

  const { email, username, avatarUrl } = useAppSelector(userSelector);

  const {
    handleUpdatedUser,
    isSuccess: userUpdateIsSuccess,
    isError: userUpdateIsError,
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

  const {
    formState: deleteAccountFormState,
    handleChange: deleteAccountHandleChange,
    handleSubmit: deleteAccountHandleSubmit,
    isError: deleteAccountIsError,
    toggleShowAccountModal,
    showDeleteAccountModal,
  } = useDeleteAccount();

  useEditProfilePopups({
    userUpdateIsSuccess,
    userUpdateIsError,
    avatarLoadingError,
    avatarUploadsErrorCounter,
    deleteAccountIsError,
  });

  return (
    <main className="my-10 flex w-full justify-center px-30 max-w-[1440px] gap-10">
      <DeleteAccountModal
        toggleModal={toggleShowAccountModal}
        visible={showDeleteAccountModal}
        formState={deleteAccountFormState}
        handleChange={deleteAccountHandleChange}
        handleSubmit={deleteAccountHandleSubmit}
      />
      <form
        className="w-full max-w-200 justify-between items-center"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
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
            handleDeleteAccount={toggleShowAccountModal}
          />
        </div>
      </form>
    </main>
  );
};
