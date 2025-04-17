// captcha/captcha.router.js
const express = require("express");
const router = express.Router();
const { getCaptcha } = require("./captcha.controller");

router.get("/:id", getCaptcha);

module.exports = router;
