import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { memberService } from "./member.service";
import { sendResponse } from "../../shared/sendResponse";

const createMember = catchAsync(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const userId = req.body.userId;
  const result = await memberService.createMember({
    boardId: boardId as string,
    userId,
  });
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Added board member successfully",
    data: result,
  });
});

export const memberController = {
  createMember,
};
