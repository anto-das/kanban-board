import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { columnService } from "./column.service";
import { sendResponse } from "../../shared/sendResponse";

const createColumn = catchAsync(async (req: Request, res: Response) => {
  const params = req.params.boardId as string;
  const title = req.body.title;
  const result = await columnService.createColumn({
    title: title,
    boardId: params,
  });
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Column created successfully...",
    data: result,
  });
});

export const columnController = {
  createColumn,
};
