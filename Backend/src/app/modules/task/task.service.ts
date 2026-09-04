import { Task } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createTask = async (payload: Omit<Task, "createdAt" | "updatedAt">) => {
  const result = await prisma.task.create({
    data: payload,
  });
  return result;
};

export const taskService = {
  createTask,
};
