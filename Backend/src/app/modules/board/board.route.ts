import { Router } from "express";
import { boardController } from "./board.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/authorize.middleware";
import { UserRole } from "../../../generated/prisma/enums";

const router: Router = Router();

router.post("/create", authenticate, boardController.createBoard);

router.get(
  "/get/:boardId",
  authenticate,
  authorize(UserRole.MEMBER, UserRole.ADMIN, UserRole.VIEWER),
  boardController.getBoardInfo,
);

export const boardRoutes = router;
