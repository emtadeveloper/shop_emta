// routes/addressRoutes.js
import express from "express";
import { deleteThemeController, updateThemeController, getThemeController } from "./theme.controller.mjs";

const router = express.Router();

router.get("/", getThemeController);

router.put("/", updateThemeController);

router.delete("/", deleteThemeController);

export default router;
