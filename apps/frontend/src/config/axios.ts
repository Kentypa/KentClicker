import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { store } from "../store";
import { changeByData } from "../stores/user/userSlice";
import { ServiceNames } from "../enums/serviceNames";

interface FailedRequest {
  resolve: () => void;
  reject: (error: unknown) => void;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_BE_URL ?? "http://localhost:3000",
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: unknown, success: boolean) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (success) resolve();
    else reject(error);
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    if (isRefreshing) {
      return new Promise<void>((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }).then(() => api(originalRequest));
    }

    isRefreshing = true;

    return api
      .post(`${ServiceNames.AUTH}/refresh`)
      .then(() => {
        store.dispatch(
          changeByData({
            ...store.getState().user,
            isAuthenticated: true,
            authLoading: false,
          }),
        );
        processQueue(null, true);
        return api(originalRequest);
      })
      .catch((refreshError) => {
        store.dispatch(
          changeByData({
            ...store.getState().user,
            isAuthenticated: false,
            authLoading: false,
          }),
        );
        processQueue(refreshError, false);
        return Promise.reject(refreshError);
      })
      .finally(() => {
        isRefreshing = false;
      });
  },
);

export default api;
