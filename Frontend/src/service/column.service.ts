import { httpClient } from "../lib/axios/httpClient";
import { handleServerError } from "../lib/utils";

export const columnService = {
  createColumn: async (payload: { boardId: string; title: string }) => {
    try {
      const res = await httpClient.post(`/column/create/${payload.boardId}`, {
        title: payload.title,
      });
      return res;
    } catch (error) {
      return handleServerError(error);
    }
  },
  updateColumn: async (payload: {
    boardId: string;
    columnId: string;
    title: string;
  }) => {
    try {
      const res = await httpClient.patch(
        `/column/update/${payload.boardId}?columnId=${payload.columnId}`,
        {
          title: payload.title,
        },
      );
      return res;
    } catch (error) {
      return handleServerError(error);
    }
  },
  deleteColumn: async (payload: { boardId: string; columnId: string }) => {
    try {
      const res = await httpClient.delete(
        `/column/delete/${payload.boardId}?columnId=${payload.columnId}`,
      );
      return res;
    } catch (error) {
      return handleServerError(error);
    }
  },
};
