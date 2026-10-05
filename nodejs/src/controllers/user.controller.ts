import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { User } from "../types/user";

export const getProfile = (req: AuthRequest, res: Response<User>) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" } as any);
  }

  return res.json(req.user);
};