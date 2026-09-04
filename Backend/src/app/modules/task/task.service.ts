import { Task } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createTask = async (
  payload: Omit<Task, "createdAt" | "updatedAt">,
): Promise<Task> => {
  const task = await prisma.task.create({
    data: payload,
  });
  return task;
};

const moveTask = async (
  taskId: string,
  targetedColumnId: string,
  targetedPosition: number,
) => {
  // current column id
  // targeted column id
  // targeted position
  const result = await prisma.$transaction(async (tx) => {
    const task = await tx.task.findFirst({
      where: {
        id: taskId,
      },
    });
    if (!task) {
      throw new Error("Task not found");
    }
    const currentColumnId = task.columnId;
    const currentPosition = task.position;
    if (targetedColumnId === currentColumnId) {
      if (currentPosition < targetedPosition) {
        await tx.task.updateMany({
          where: {
            columnId: currentColumnId,
            position: {
              gt: currentPosition,
              lte: targetedPosition,
            },
          },
          data: {
            position: {
              decrement: 1,
            },
          },
        });
      } else if (currentPosition > targetedPosition) {
        await tx.task.updateMany({
          where: {
            columnId: currentColumnId,
            position: {
              gte: targetedPosition,
              lt: currentPosition,
            },
          },
          data: {
            position: {
              increment: 1,
            },
          },
        });
      }
      return await tx.task.update({
        where: {
          id: taskId,
        },
        data: {
          position: targetedPosition,
        },
      });
    }
    await tx.task.updateMany({
      where: {
        columnId: currentColumnId,
        position: {
          gt: currentPosition,
        },
      },
      data: {
        position: {
          decrement: 1,
        },
      },
    });
    await tx.task.updateMany({
      where: {
        columnId: targetedColumnId,
        position: {
          gte: targetedPosition,
        },
      },
      data: {
        position: {
          increment: 1,
        },
      },
    });
    const movedTask = await tx.task.update({
      where: {
        id: taskId,
      },
      data: {
        columnId: targetedColumnId,
        position: targetedPosition,
      },
    });
    return movedTask;
  });
  return result;
};

export const taskService = {
  createTask,
  moveTask
};
