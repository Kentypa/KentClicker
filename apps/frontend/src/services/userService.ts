import api from "../config/axios";

export function userService(url: string) {
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
  };
}
