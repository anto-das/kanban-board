import { Board } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createBoard = async (
  payload: Omit<Board, "id" | "createdAt" | "updatedAt">,
) => {
  const result = await prisma.board.create({
    data: payload,
  });

  return result;
};

const getBoardInfo = async (userId: string, boardId: string) => {
  const result = await prisma.board.findFirst({
    where: {
      id: boardId,
      OR: [
        { ownerId: userId },
        {
          members: {
            some: {
              userId,
            },
          },
        },
      ],
    },
    include: {
      columns: {
        include: {
          tasks: {
            select: {
              id: true,
              title: true,
              description: true,
              status: true,
              position: true,
              assigneeId: true,
            },
            orderBy: {
              position: "asc",
            },
          },
        },
      },
    },
  });
  return result;
};

export const boardService = {
  createBoard,
  getBoardInfo,
};
