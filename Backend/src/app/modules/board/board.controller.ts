import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { boardService } from "./board.service";
import { sendResponse } from "../../shared/sendResponse";

const createBoard = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const userId = req.user?.id;
  const result = await boardService.createBoard({
    ...payload,
    ownerId: userId,
  });
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "created table success fully..",
    data: result,
  });
});

const getAllBoard = catchAsync(async (req: Request, res: Response) => {
  const id = req.user?.id as string;
  const result = await boardService.getAllBoard(id);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Retrieved all boards successfully..",
    data: result,
  });
});

const getBoardInfo = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const { boardId } = req.params;
  const result = await boardService.getBoardInfo(userId, boardId as string);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Retrieved board info successfully..",
    data: result,
  });
});

const updateBoard = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.boardId as string;
  const body = req.body;
  const result = await boardService.updateBoard({ ...body, id: id });
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Updated board success fully..",
    data: result,
  });
});
const deleteBoard = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.boardId as string;
  const result = await boardService.deleteBoard(id);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Deleted board success fully..",
    data: result,
  });
});

export const boardController = {
  createBoard,
  getBoardInfo,
  getAllBoard,
  updateBoard,
  deleteBoard,
};
