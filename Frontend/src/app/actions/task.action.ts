"use server";

import { taskService } from "@/service/task.service";

export const createTask = async (payload: {
  boardId: string;
  columnId: string;
  title: string;
  description: string;
  position: number;
}) => {
  return taskService.createTask(payload);
};

export const moveTask = async (payload: {
  taskId: string;
  targetedColumnId: string;
  targetedPosition: number;
  boardId: string;
}) => {
  return taskService.moveTask(payload);
};

export const updateTask = async (payload: {
  boardId: string;
  id: string;
  assigneeId: string;
}) => {
  return taskService.updateTask(payload);
};
