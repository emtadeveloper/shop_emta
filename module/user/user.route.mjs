// routes/addressRoutes.js
import express from "express";
import {
    createAddressController, updateAddressController,
    deleteAddressController, updateUserController,
    getAddressController, getAllAddressController
} from "./user.controller.mjs";

const router = express.Router();


router.put("/", updateUserController);

router.get("/address", getAllAddressController);

router.get("/address/:id", getAddressController);

router.post("/address", createAddressController);

router.put("/address/:id", updateAddressController);

router.delete("/address/:id", deleteAddressController);


export default router;
