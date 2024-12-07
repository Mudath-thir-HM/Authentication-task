import { Request, Response } from "express";
import { AuthService } from "../services/authService";

export const AuthController = {
  async register(req: Request, res: Response) {
    try {
      const user = await AuthService.register(req.body);
      res.status(201).json({ messsage: "User registered successfully", user });
    } catch (error: any) {
      res.status(400).json({ error: error.messsage });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const token = await AuthService.login(req.body.email, req.body.password);
      res.status(200).json({ token });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async profile(req: Request, res: Response) {
    const user = (req as any).user;
    res.status(200).json({ user });
  },
};
