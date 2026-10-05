import { Request, Response, NextFunction } from "express";
import { User } from "../types/user";

// ✅ Extend Express Request to include `user`
export interface AuthRequest extends Request {
  user?: User;
}

export const authenticate = (
  req: AuthRequest,
  _res: Response,
  next: NextFunction,
) => {
  // Simulate auth
  const user: User = {
    id: "123",
    name: "Hamza",
    email: "hamza@example.com",
  };

  req.user = user;
  next();
};
