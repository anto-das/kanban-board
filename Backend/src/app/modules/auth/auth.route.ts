import { Router } from "express";
import { authController } from "./auth.controller";
import { authenticate } from "../../middleware/auth.middleware";

const router: Router = Router();
router.post("/register", authController.createUser);
router.post("/login", authController.loginUser);
router.post("/logout", authController.logout);
router.get("/get", authenticate, authController.getUser);
export const authRouter = router;
