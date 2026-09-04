import { NextFunction, Request, Response } from "express";
import { BoardRole } from "../../generated/prisma/enums";
import { prisma } from "../lib/prisma";

export const authorize = (...roles: BoardRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user?.id;
      const { boardId } = req.params;
      console.log(req.user)
      if (!userId || !boardId) {
        return res.status(403).json({
          success: false,
          message: "Forbidden",
        });
      }

      const board = await prisma.board.findFirst({
        where: {
          id: boardId as string,
          OR: [
            { ownerId: userId },
            {
              members: {
                some: {
                  userId,
                  memberRole: {
                    in: roles,
                  },
                },
              },
            },
          ],
        },
      });

      if (!board) {
        return res.status(403).json({
          success: false,
          message: "You do not have permission to access this board",
        });
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};
