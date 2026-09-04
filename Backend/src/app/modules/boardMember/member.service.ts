import { Member } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createMember = async (payload: Pick<Member, "userId" | "boardId">) => {
  const result = await prisma.member.create({
    data: payload,
  });
  return result;
};

export const memberService = {
  createMember,
};
