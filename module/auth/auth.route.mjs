import express from "express"
import { register, login } from "./auth.controller.mjs"

const router = express.Router()

router.post("/register", register);
router.post("/login", login);

export default router;
