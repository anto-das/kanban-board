import { Router } from "express";
import { authController } from "./auth.controller";

const router: Router = Router();
router.post("/register", authController.createUser);
router.post("/login", authController.loginUser);
router.post("/logout", authController.logout);
export const authRouter = router;
