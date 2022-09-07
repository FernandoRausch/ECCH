import { Router } from "express";
import registroRouter from "./registerRoutes.js";
import loginRouter from "./loginRoutes.js";
import logoutRouter from "./logoutRoutes.js";

const router = Router()

router.use("/registro", registroRouter);
router.use("/login", loginRouter);
router.use("/logout", logoutRouter);

export default router;