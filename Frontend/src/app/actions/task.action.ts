"use server";

import { taskService } from "@/src/service/task.service";

export const createTask = async (payload: {
  boardId: string;
  columnId: string;
  title: string;
  description: string;
  position: number;
}) => {
  return taskService.createTask(payload);
};
