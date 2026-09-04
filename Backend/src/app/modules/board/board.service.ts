import { Board } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createBoard = async (
  payload: Omit<Board, "id" | "createdAt" | "updatedAt">,
) => {
  const result = await prisma.$transaction(async (tx) => {
    const board = await tx.board.create({
      data: payload,
    });
    if (!board) {
      throw new Error("Board not created something went wrong..");
    }
    // const user = await tx.user.update({
    //   where: {
    //     id: payload.ownerId,
    //   },
    //   data: {
    //     role: "ADMIN",
    //   },
    // });
    return board;
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
          some: { userId },
        },
      },
    ],
  },
  include: {
    columns: {
      include: {
        tasks: {
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
