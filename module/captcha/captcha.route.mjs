import express from "express"
import { getCaptcha } from "./captcha.controller.mjs"

const router = express.Router();

router.get("/:id", getCaptcha);

export default router;
