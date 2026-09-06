import { httpClient } from "../lib/axios/httpClient";
import { handleServerError } from "../lib/utils";

// src/types/task.type.ts

// ১. মূল টাস্ক অবজেক্টের ইন্টারফেস
export interface ITask {
  id: string;
  columnId: string;
  title: string;
  description: string;
  status: "TODO" | "IN_PROGRESS" | "DONE"; // আপনার প্রজেক্টের স্ট্যাটাস অনুযায়ী
  position: number;
  assigneeId: string | null; // যেহেতু নাল আসতে পারে
  createdAt: string; // অথবা Date ব্যবহার করতে পারেন
  updatedAt: string;
}

export interface ApiResponse<T> {
  httpStatusCode: number;
  success: boolean;
  message: string;
  data: T;
}
export type CreateTaskResponse = ApiResponse<ITask>;

export const taskService = {
  createTask: async (payload: {
    boardId: string;
    columnId: string;
    title: string;
    description: string;
    position: number;
  }) => {
    const { boardId, ...task } = payload;
    try {
      const res: ApiResponse<ITask> = await httpClient.post(
        `/task/create/${boardId}`,
        task,
      );
      return res;
    } catch (err) {
      return handleServerError(err);
    }
  },
  moveTask: async (payload: {
    taskId: string;
    boardId: string;
    targetedColumnId: string;
    targetedPosition: number;
  }) => {
    const { boardId, taskId, targetedColumnId, targetedPosition } = payload;
    try {
      const res: ApiResponse<ITask> = await httpClient.patch(
        `/task/move/${boardId}`,
        {
          taskId: taskId,
          columnId: targetedColumnId,
          position: targetedPosition,
        },
      );
      return res;
    } catch (err) {
      return handleServerError(err);
    }
  },
};
