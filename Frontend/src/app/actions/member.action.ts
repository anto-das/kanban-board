"use server";

import { memberService } from "@/src/service/boardMember";

export const addMember = async (payload: {
  boardId: string;
  userId: string;
}) => {
  return await memberService.addMember(payload);
};
