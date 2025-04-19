// routes/addressRoutes.js
import express from "express";
import { createAddressController, updateAddressController, deleteAddressController } from "./user.controller.mjs";

const router = express.Router();

router.post("/address", createAddressController);

router.put("/address/:id", updateAddressController);

router.delete("/address/:id", deleteAddressController);


export default router;
