import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { store } from "../store";
import { changeByData } from "../stores/user/userSlice";
import { ServiceNames } from "../enums/serviceNames";

interface QueuedRequest {
  resolve: (value: AxiosResponse) => void;
  reject: (error: unknown) => void;
  config: AxiosRequestConfig;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_BE_URL
    ? String(import.meta.env.VITE_BE_URL)
    : "http://localhost:3000",
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue: QueuedRequest[] = [];

const processQueue = (error?: unknown) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      api(prom.config).then(prom.resolve).catch(prom.reject);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (
      error.response?.status !== 401 ||
      originalRequest._retry ||
      originalRequest.url?.includes(`${ServiceNames.AUTH}/refresh`)
    ) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise<AxiosResponse>((resolve, reject) => {
        failedQueue.push({ resolve, reject, config: originalRequest });
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      await api.post(`${ServiceNames.AUTH}/refresh`);

      store.dispatch(
        changeByData({
          ...store.getState().user,
          isAuthenticated: true,
          authLoading: false,
        }),
      );

      processQueue();

      return api(originalRequest);
    } catch (refreshError) {
      store.dispatch(
        changeByData({
          ...store.getState().user,
          isAuthenticated: false,
          authLoading: false,
        }),
      );

      processQueue(refreshError);

      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  },
);

export default api;
