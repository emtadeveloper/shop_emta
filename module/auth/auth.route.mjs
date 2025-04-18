import express from "express"
import { register, login, send } from "./auth.controller.mjs"

const router = express.Router()

router.post("/register", register);
router.post("/login", login);
router.post("/send-otp", send);

export default router;
