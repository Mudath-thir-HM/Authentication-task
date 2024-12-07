import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { authMiddleWare } from "../middleware/auth.middleware";

const router = Router();

router.post("/register", AuthController.register);
router.get("/profile", authMiddleWare, AuthController.profile);
router.post("/login", AuthController.login);

export default router;
