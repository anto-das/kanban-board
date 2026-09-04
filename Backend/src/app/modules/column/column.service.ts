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

export const columnService = {
  createColumn,
};
