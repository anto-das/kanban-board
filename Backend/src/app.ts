import express, { Request, Response } from "express";
import { IndexRouter } from "./app/routes";
// import { PrismaClient } from '@prisma/client';
import cors from "cors";
import { env } from "./app/config/env";
export const app = express();
// const prisma = new PrismaClient();

app.use(express.json());
// app.use(
//   cors({
//     origin: [env.APP_URL || "http://localhost:3000"],
//     // credentials: true,
//   }),
// );

app.use("/api/v1", IndexRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Manage your tasks......!");
});
