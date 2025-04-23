// routes/addressRoutes.js
import express from "express";
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "./category.controller.mjs";
import { uploadIcon } from "../../common/util/multer.mjs";

const router = express.Router();

router.get("/", getAllCategories);

router.post("/", uploadIcon, createCategory);

router.get("/:id", getCategoryById);

router.put("/:id", uploadIcon, updateCategory);

router.delete("/:id", deleteCategory);

export default router;
