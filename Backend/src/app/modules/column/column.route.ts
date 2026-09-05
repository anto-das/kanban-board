import { Router } from "express";
import { columnController } from "./column.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/authorize.middleware";
import { BoardRole } from "../../../generated/prisma/enums";

const router: Router = Router();

router.post(
  "/create/:boardId",
  authenticate,
  authorize(BoardRole.ADMIN, BoardRole.MEMBER),
  columnController.createColumn,
);

router.patch(
  "/update/:boardId",
  authenticate,
  authorize("ADMIN", "MEMBER"),
  columnController.updateColumn,
);
router.delete(
  "/delete/:boardId",
  authenticate,
  authorize("ADMIN", "MEMBER"),
  columnController.deleteColumn,
);

export const columnRoutes = router;
