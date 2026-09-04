import { Router } from "express";
import { columnController } from "./column.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/authorize.middleware";
import { UserRole } from "../../../generated/prisma/enums";

const router: Router = Router();

router.post(
  "/create/:boardId",
  authenticate,
  authorize(UserRole.USER),
  columnController.createColumn,
);

export const columnRoutes = router;
