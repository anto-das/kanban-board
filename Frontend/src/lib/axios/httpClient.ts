import { env } from "@/src/config/env";
import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get("task_orbit_token")?.value;

      if (token && config.headers) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (error) {
      console.warn(
        "Could not access cookies in this runtime environment:",
        error,
      );
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const customError = {
      message: error.response?.data?.message || "Something went wrong",
      status: error.response?.status,
    };
    return Promise.reject(customError);
  },
);

const getHttp = <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return axiosInstance.get(url, config) as unknown as Promise<T>;
};
const postHttp = <T, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
): Promise<T> => {
  return axiosInstance.post(url, data, config) as unknown as Promise<T>;
};
const patchHttp = <T, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
): Promise<T> => {
  return axiosInstance.patch<T>(url, data, config) as unknown as Promise<T>;
};
const deleteHttp = <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  return axiosInstance.delete<any, T>(url, config) as unknown as Promise<T>;
};
export const httpClient = {
  get: getHttp,
  post: postHttp,
  patch: patchHttp,
  delete: deleteHttp,
};
