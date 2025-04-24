// routes/addressRoutes.js
import express from "express";
import {
    createAddressController, updateAddressController,
    deleteAddressController, updateUserController,
    getAddressController, getAllAddressController,
    setUserAvatarController,
    getUserAvatarController,
    deleteUserAvatarController,
    me
} from "./profile.controller.mjs";
import { uploadAvatar, } from '../../common/util/multer.mjs'
import Auth from '../../common/middleware/authMiddleware.mjs'

const router = express.Router();

router.put("/", updateUserController);

router.get("/", Auth, me);

router.get("/address", getAllAddressController);

router.get("/address/:id", getAddressController);

router.post("/address", createAddressController);

router.put("/address/:id", updateAddressController);

router.delete("/address/:id", deleteAddressController);

router.post("/avatar", uploadAvatar, setUserAvatarController);

router.get("/avatar", getUserAvatarController);

router.delete("/avatar", deleteUserAvatarController);



export default router;
