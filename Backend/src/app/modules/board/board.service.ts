import { Board } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createBoard = async (
  payload: Omit<Board, "id" | "createdAt" | "updatedAt">,
) => {
  const board = await prisma.board.create({
    data: payload,
  });
  if (!board) {
    throw new Error("Board not created something went wrong..");
  }
  return board;
};

const getAllBoard = async (userId: string) => {
  const boards = await prisma.board.findMany({
    where: {
      OR: [
        {
          ownerId: userId,
        },
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
      members: {
        where: {
          userId,
        },
        select: {
          memberRole: true,
        },
      },

      _count: {
        select: {
          columns: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return boards;
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

const updateBoard = async (
  payload: Omit<Board, "ownerId" | "createdAt" | "updatedAt">,
) => {
  const result = await prisma.board.update({
    where: {
      id: payload.id,
    },
    data: payload,
  });
  return result;
};
const deleteBoard = async (boardId: string) => {
  const result = await prisma.board.delete({
    where: {
      id: boardId,
    },
    select: {
      id: true,
      ownerId: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

export const boardService = {
  createBoard,
  getAllBoard,
  getBoardInfo,
  updateBoard,
  deleteBoard,
};
