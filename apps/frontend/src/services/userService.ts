import api from "../config/axios";
import { DeleteAccountFormData } from "../types/delete-account-form-data";

export function userService(url: string) {
  const deleteAccount = async (data: DeleteAccountFormData) => {
    return api.delete(`${url}/delete-account`, { data }).catch((error) => {
      console.log(error.toJSON());
      throw new Error(error.message);
    });
  };

  const getUser = async () => {
    return api.get(`${url}/me`).catch((error) => {
      console.log(error.toJSON());
      throw new Error(error.message);
    });
  };

  const updateUserData = async (data: FormData) => {
    return api.patch(`${url}/update`, data).catch((error) => {
      console.log(error.toJSON());
      throw new Error(error.message);
    });
  };

  return {
    getUser,
    updateUserData,
    deleteAccount,
  };
}
