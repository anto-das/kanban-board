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

const updateColumn = catchAsync(async (req: Request, res: Response) => {
  const param = req.query.columnId as string;
  const title = req.body.title as string;
  const result = await columnService.updateColumn(param, title);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "update column successfully",
    data: result,
  });
});
const deleteColumn = catchAsync(async (req: Request, res: Response) => {
  const param = req.query.columnId as string;
  const result = await columnService.deleteColumn(param);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "update column successfully",
    data: result,
  });
});

export const columnController = {
  createColumn,
  updateColumn,
  deleteColumn
};
