import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { boardService } from "./board.service";
import { sendResponse } from "../../shared/sendResponse";

const createBoard = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const userId = req.user?.id;
  console.log("Payload received in boardController:", userId, payload);
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

const getBoardInfo = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const boardId = req.params.boardId as string;
  const result = await boardService.getBoardInfo(userId, boardId);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Retrieved board info successfully..",
    data: result,
  });
});

export const boardController = {
  createBoard,
  getBoardInfo,
};
