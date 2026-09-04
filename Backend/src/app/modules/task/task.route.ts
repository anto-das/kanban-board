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
  "/move/:boardId",
  authenticate,
  authorize(BoardRole.MEMBER, BoardRole.ADMIN),
  taskController.moveTask,
);
router.patch(
  "/updateTask/:boardId",
  authenticate,
  authorize(BoardRole.ADMIN),
  taskController.updateTask,
);

router.delete(
  "/delete/:boardId",
  authenticate,
  authorize("ADMIN"),
  taskController.deleteTask,
);

export const taskRouter = router;
