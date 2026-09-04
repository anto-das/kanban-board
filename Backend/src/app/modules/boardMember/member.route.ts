import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/authorize.middleware";
import { memberController } from "./member.controller";

const router: Router = Router();
router.post(
  "/create/:boardId",
  authenticate,
  authorize("ADMIN"),
  memberController.createMember,
);

export const MemberRoute = router;
