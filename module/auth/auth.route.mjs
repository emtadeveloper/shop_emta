import express from "express"
import { register, login, send, verify, refreshToken, forgotPassword, resetPassword } from "./auth.controller.mjs"

const router = express.Router()

router.post("/register", register);
router.post("/login", login);
router.post("/send-otp", send);
router.post("/verify-otp", verify);
router.post("/refresh-token", refreshToken);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
