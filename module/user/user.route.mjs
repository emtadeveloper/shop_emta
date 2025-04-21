// routes/addressRoutes.js
import express from "express";
import {
    createAddressController, updateAddressController,
    deleteAddressController, updateUserController,
    getAddressController, getAllAddressController,
    setUserAvatarController,
} from "./user.controller.mjs";
import { uploadFile, } from '../../common/util/multer.mjs'

const router = express.Router();

router.put("/", updateUserController);

router.get("/address", getAllAddressController);

router.get("/address/:id", getAddressController);

router.post("/address", createAddressController);

router.put("/address/:id", updateAddressController);

router.delete("/address/:id", deleteAddressController);

router.post("/avatar", uploadFile.single("avatar"), setUserAvatarController);

export default router;
