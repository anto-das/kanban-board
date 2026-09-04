import { Router } from "express";
import { taskController } from "./task.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/authorize.middleware";
import { BoardRole } from "../../../generated/prisma/enums";

const router: Router = Router();

router.post(
  "/create/:boardId",
  authenticate,
  authorize(BoardRole.MEMBER, BoardRole.ADMIN),
  taskController.createTask,
);
router.patch(
  "/update/:boardId",
  authenticate,
  authorize(BoardRole.MEMBER, BoardRole.ADMIN),
  taskController.moveTask,
);

export const taskRouter = router;
