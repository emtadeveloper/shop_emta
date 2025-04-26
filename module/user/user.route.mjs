// routes/addressRoutes.js
import express from "express";
import { changeRoleUserController, getAllController } from "./user.controller.mjs";

const router = express.Router();

router.get("/", getAllController);

router.put("/change-role/:id", changeRoleUserController);

export default router;
