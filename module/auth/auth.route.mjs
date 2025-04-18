import express from "express"
import { register, login, send, verify } from "./auth.controller.mjs"

const router = express.Router()

router.post("/register", register);
router.post("/login", login);
router.post("/send-otp", send);
router.post("/verify-otp", verify);

export default router;
