import express from "express";
import { createRoleController, getAllRoleController, getRoleByIdController, updateRoleByIdController, deleteRoleByIdController } from "./role.controller.mjs";

const router = express.Router();

router.post("/", createRoleController);
router.get("/", getAllRoleController);
router.get("/:id", getRoleByIdController);
router.put("/:id", updateRoleByIdController);
router.delete("/:id", deleteRoleByIdController);

export default router;
