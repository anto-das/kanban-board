import { Router } from "express";
import { boardController } from "./board.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/authorize.middleware";
import { BoardRole } from "../../../generated/prisma/enums";

const router: Router = Router();

router.post("/create", authenticate, boardController.createBoard);
router.get(
  "/get",
  authenticate,
  boardController.getAllBoard,
);
router.get(
  "/get/:boardId",
  authenticate,
  authorize(BoardRole.VIEWER, BoardRole.ADMIN, BoardRole.MEMBER),
  boardController.getBoardInfo,
);

export const boardRoutes = router;
