import { httpClient } from "../lib/axios/httpClient";
import { handleServerError } from "../lib/utils";

export const memberService = {
  addMember: async (payload: { boardId: string; userId: string }) => {
    try {
      const res = await httpClient.post(`/member/create/${payload.boardId}`, {
        userId: payload.userId,
      });
      return res;
    } catch (err) {
      return handleServerError(err);
    }
  },
};
