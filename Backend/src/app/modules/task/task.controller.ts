import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { taskService } from "./task.service";
import { sendResponse } from "../../shared/sendResponse";

const createTask = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;
  const result = await taskService.createTask(body);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Create task successfully...",
    data: result,
  });
});

export const taskController = {
  createTask,
};
