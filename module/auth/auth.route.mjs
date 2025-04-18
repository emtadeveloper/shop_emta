import express from "express"
import { register, login, send, verify, refreshToken, me } from "./auth.controller.mjs"
import Auth from "../../common/middleware/AuthMiddleware.mjs";

const router = express.Router()

router.post("/register", register);
router.post("/login", login);
router.post("/send-otp", send);
router.post("/verify-otp", verify);
router.post("/refresh-token", refreshToken);
router.get("/me", Auth, me);

export default router;
