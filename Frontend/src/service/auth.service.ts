import { cookies } from "next/headers";
import { httpClient } from "../lib/axios/httpClient";
import { AuthApiResponse, IUser } from "../types/authResponse.type";
import { handleServerError } from "../lib/utils";

export const authService = {
  register: async (payload: IUser) => {
    try {
      const res = await httpClient.post<AuthApiResponse>(
        "/auth/register",
        payload,
      );
      const cookieStore = await cookies();
      cookieStore.set("task_orbit_token", res.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });
      return { data: res.data, error: null };
    } catch (error) {
      return {
        data: null,
        error: "Registered Failed!",
        details: error,
      };
    }
  },
  login: async (payload: Omit<IUser, "name">) => {
    try {
      const res = await httpClient.post<AuthApiResponse>(
        "/auth/login",
        payload,
      );
      const cookieStore = await cookies();
      cookieStore.set("task_orbit_token", res.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });

      return {
        data: res.data,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error: "Login Failed!",
        details: error,
      };
    }
  },
  logout: async () => {
    try {
      const res = await httpClient.post<{
        success: boolean;
        message: string;
      }>("/auth/logout");
      const cookieStore = await cookies();
      if (res.success) {
        cookieStore.delete("task_orbit_token");
      }
      return res;
    } catch (error) {
      return {
        data: null,
        error: "Logout Failed!",
        details: error,
      };
    }
  },
  getUser: async () => {
    try {
      const res = await httpClient.get("/auth/get");
      console.log(res);
      return res;
    } catch (err) {
      return handleServerError(err);
    }
  },
};
