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

const moveTask = catchAsync(async (req: Request, res: Response) => {
  const taskId = req.body.taskId;
  const targetedColumnId = req.body.columnId;
  const targetedPosition = Number(req.body.position);
  console.log({ targetedColumnId, targetedPosition });
  const result = await taskService.moveTask(
    taskId,
    targetedColumnId,
    targetedPosition,
  );
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Task column updated successfully..",
    data: result,
  });
});

export const taskController = {
  createTask,
  moveTask,
};
