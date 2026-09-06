"use server";

import { columnService } from "@/src/service/column.service";

export const createColumn = async (payload: {
  boardId: string;
  title: string;
}) => {
  return await columnService.createColumn(payload);
};
export const updateColumn = async (payload: {
  boardId: string;
  columnId: string;
  title: string;
}) => {
  return await columnService.updateColumn(payload);
};
export const deleteColumn = async (payload: {
  boardId: string;
  columnId: string;
}) => {
  return await columnService.deleteColumn(payload);
};
