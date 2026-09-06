"use server";

import { authService } from "@/src/service/auth.service";
import { IUser } from "@/src/types/authResponse.type";

export const register = async (payload: IUser) => {
  return await authService.register(payload);
};
export const login = async (payload: Omit<IUser, "name">) => {
  return await authService.login(payload);
};
export const logout = async () => {
  return await authService.logout();
};
export const getUser = async () => {
  return await authService.getUser();
};
