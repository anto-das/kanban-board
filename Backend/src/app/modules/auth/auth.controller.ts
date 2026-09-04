import { Request, Response } from "express";
import { authService } from "./auth.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.createUser(req.body);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "User created successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.loginUser(req.body);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "User logged in successfully",
    data: result,
  });
});

export const authController = {
  createUser,
  loginUser,
};
