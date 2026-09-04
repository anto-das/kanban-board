import { Column } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createColumn = async (
  payload: Omit<Column, "id" | "createdAt" | "updatedAt">,
): Promise<Column> => {
  const result = await prisma.column.create({
    data: payload,
  });
  return result;
};

export const columnService = {
  createColumn,
};
