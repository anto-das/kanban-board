import express, { Request, Response } from "express";
import { IndexRouter } from "./app/routes";
// import { PrismaClient } from '@prisma/client';

export const app = express();
// const prisma = new PrismaClient();

app.use(express.json());

app.use("/api/v1", IndexRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Manage your tasks......!");
});
