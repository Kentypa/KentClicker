import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Queries } from "@enums/queriesKeys";
import { ServiceNames } from "@enums/serviceNames";
import { logout } from "@stores/user/userSlice";
import { useAppDispatch } from "@hooks/redux";
import { userService } from "@services/userService";
import { useMemo, useState } from "react";
import { useForm } from "@hooks/use-form";
import { DeleteAccountFormData } from "@custom-types/delete-account-form-data";

export const useDeleteAccount = () => {
  const [showDeleteAccountModal, setShowAccountModal] = useState(false);

  const toggleShowAccountModal = () =>
    setShowAccountModal(!showDeleteAccountModal);

  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { deleteAccount } = userService(ServiceNames.USER);

  const { mutate, isSuccess, ...otherOptions } = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      dispatch(logout());

      queryClient.removeQueries({ queryKey: [Queries.AUTH] });
      queryClient.removeQueries({ queryKey: [Queries.USER] });
    },
  });

  const initalState = useMemo<DeleteAccountFormData>(
    () => ({ password: "", passwordRepeat: "" }),
    []
  );

  const { formState, handleChange, handleSubmit } =
    useForm<DeleteAccountFormData>(initalState, mutate);

  return {
    formState,
    isSuccess,
    showDeleteAccountModal,
    handleChange,
    handleSubmit,
    toggleShowAccountModal,
    ...otherOptions,
  };
};
