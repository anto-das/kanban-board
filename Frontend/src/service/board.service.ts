import { httpClient } from "../lib/axios/httpClient";
import { handleServerError } from "../lib/utils";
import { Board } from "../types/board.type";

export const boardService = {
  createBoard: async (payload: { name: string }) => {
    try {
      const res = await httpClient.post("/board/create", payload);
      return res;
    } catch (error) {
      return handleServerError(error);
    }
  },
  getAllBoard: async () => {
    try {
      const res = await httpClient.get<Board>("/board/get");
      return res;
    } catch (err: any) {
      return handleServerError(err, "Retrieved Board Data Field!");
    }
  },
  getBoardInfo: async (boardId: string) => {
    try {
      const res: any = await httpClient.get(`/board/get/${boardId}`);
      return res.data;
    } catch (err) {
      return handleServerError(err, "Retrieved Board Data Field!");
    }
  },
  updateBoardInfo: async (payload: { id: string; name: string }) => {
    try {
      const res = await httpClient.patch(`/board/update/${payload.id}`, {
        name: payload.name,
      });
      console.log(res);
      return res;
    } catch (error) {
      return handleServerError(error);
    }
  },
};
