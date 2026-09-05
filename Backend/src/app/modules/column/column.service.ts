import { Column } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createColumn = async (
  payload: Omit<Column, "id" | "createdAt" | "updatedAt">,
): Promise<Column> => {
  const column = await prisma.column.create({
    data: payload,
  });
  return column;
};

const updateColumn = async (columnId: string, title: string) => {
  const result = await prisma.column.update({
    where: {
      id: columnId,
    },
    data: {
      title,
    },
  });
  return result;
};
const deleteColumn = async (columnId: string) => {
  const result = await prisma.column.delete({
    where: {
      id: columnId,
    },
  });
  return result;
};

export const columnService = {
  createColumn,
  updateColumn,
  deleteColumn,
};
