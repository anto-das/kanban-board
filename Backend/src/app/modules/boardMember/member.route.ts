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

router.patch(
  "/update/:boardId",
  authenticate,
  authorize("ADMIN"),
  memberController.updateMember,
);

router.delete(
  "/delete/:boardId",
  authenticate,
  authorize("ADMIN"),
  memberController.deleteMember,
);

export const MemberRoute = router;
