import { Request, Response } from "express";
import { authService } from "./auth.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { COOKIE_OPTIONS } from "../../config/cookieConfig";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { user, token } = await authService.createUser(req.body);
  res.cookie("task_orbit_token", token, COOKIE_OPTIONS);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "User created successfully",
    data: { user, token },
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { user, token } = await authService.loginUser(req.body);
  res.cookie("task_orbit_token", token, COOKIE_OPTIONS);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "User logged in successfully",
    data: {
      user,
      token,
    },
  });
});

const logout = catchAsync(async (req: Request, res: Response) => {
  res.clearCookie("task_orbit_token", COOKIE_OPTIONS);
  res.status(200).send({
    success: true,
    message: "Logged out successfully from Task Orbit",
  });
});

export const authController = {
  createUser,
  loginUser,
  logout,
};
