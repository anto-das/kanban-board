import { Request, Response, Router } from "express";
import { authRouter } from "../modules/auth/auth.route";
import { boardRoutes } from "../modules/board/board.route";
import { columnRoutes } from "../modules/column/column.route";
import { taskRouter } from "../modules/task/task.route";

const router: Router = Router();

router.use("/auth", authRouter);
router.use("/board", boardRoutes);
router.use("/column", columnRoutes);
router.use("/task", taskRouter);
router.use((req: Request, res: Response) => {
  res.status(404).send({
    success: false,
    message: "route not found",
    method: req.method,
    path: req.path,
  });
});
export const IndexRouter = router;
