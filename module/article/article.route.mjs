import express from "express"
import { createArticle, getAllArticles } from "./article.controller.mjs"
import { uploadFeaturedImage } from "../../common/util/multer.mjs"
const router = express.Router()

router.post("/", uploadFeaturedImage, createArticle);
router.get("/", getAllArticles);

export default router;
