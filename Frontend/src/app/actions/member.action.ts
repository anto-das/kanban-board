"use server";

import { memberService } from "@/src/service/member.service";

export const addMember = async (payload: {
  boardId: string;
  userId: string;
}) => {
  return await memberService.addMember(payload);
};
