import { BoardRole, Member } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createMember = async (
  payload: Pick<Member, "userId" | "boardId">,
): Promise<Member> => {
  const result = await prisma.member.create({
    data: payload,
  });
  return result;
};

const updateMember = async (role: BoardRole, id: string): Promise<Member> => {
  const result = await prisma.member.update({
    where: {
      id: id,
    },
    data: {
      memberRole: role,
    },
  });
  return result;
};

const deleteMember = async (id: string) => {
  const result = await prisma.member.delete({
    where: {
      id,
    },
  });
  return result;
};

export const memberService = {
  createMember,
  updateMember,
  deleteMember,
};
