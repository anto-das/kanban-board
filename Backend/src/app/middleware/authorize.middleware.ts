import { NextFunction, Request, Response } from "express";
import { UserRole } from "../../generated/prisma/enums";


export const authorize = (...roles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;
    console.log(userRole)
    console.log(roles)
    if (!userRole || !roles.includes(userRole)) {
      return res.status(403).json({
        success: false,
        message:
          "Forbidden: You do not have permission to access this resource",
      });
    }
    next();
  };
};
