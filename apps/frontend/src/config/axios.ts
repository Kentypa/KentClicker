import axios from "axios";
import { ServiceNames } from "../enums/serviceNames";
import { delay } from "../utils/delay";

const api = axios.create({
  baseURL: import.meta.env.VITE_BE_URL ?? "http://localhost:3000",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      await delay(10000);

      try {
        api.post(`${ServiceNames.AUTH}/refresh`);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
