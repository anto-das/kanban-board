import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { memberService } from "./member.service";
import { sendResponse } from "../../shared/sendResponse";
import { BoardRole } from "../../../generated/prisma/enums";

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

const updateMember = catchAsync(async (req: Request, res: Response) => {
  const id = req.query.memberId as string;
  const role = req.body.memberRole as BoardRole;
  const result = await memberService.updateMember(role, id);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Update member role.",
    data: result,
  });
});

const deleteMember = catchAsync(async (req: Request, res: Response) => {
  const id = req.query.memberId as string;
  const result = await memberService.deleteMember(id);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Deleted member successfully.",
    data: result,
  });
});

export const memberController = {
  createMember,
  updateMember,
  deleteMember,
};
