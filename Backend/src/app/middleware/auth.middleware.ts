import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../shared/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import { env } from "../config/env";
export const authenticate = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1]; // Assuming Bearer token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No token provided",
      });
    }
    const decoded = jwt.verify(token, env.JWT_SECRET);
    req.user = decoded as JwtPayload;
    next();
  },
);
