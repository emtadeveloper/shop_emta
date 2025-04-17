// captcha/captcha.service.js
const redis = require("../../config/db/db.redis");

const CAPTCHA_PREFIX = "captcha:";

exports.saveCaptcha = async (key, value, ttlSec = 180) => {
    await redis.setex(`${CAPTCHA_PREFIX}${key}`, ttlSec, value.toLowerCase());
}

exports.getCaptcha = async (key) => {
    return await redis.get(`${CAPTCHA_PREFIX}${key}`);
}

exports.deleteCaptcha = async (key) => {
    await redis.del(`${CAPTCHA_PREFIX}${key}`);
}
