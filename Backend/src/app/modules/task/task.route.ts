import { Router } from "express";
import { taskController } from "./task.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/authorize.middleware";
import { UserRole } from "../../../generated/prisma/enums";

const router: Router = Router();

router.post(
  "/create",
  authenticate,
  authorize(UserRole.USER, UserRole.MEMBER),
  taskController.createTask,
);

export const taskRouter = router;
