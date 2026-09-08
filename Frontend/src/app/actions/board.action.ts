"use server";

import { boardService } from "@/service/board.service";

export const createBoard = async (payload: { name: string }) => {
  return await boardService.createBoard(payload);
};
