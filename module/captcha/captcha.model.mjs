import redis from "../../config/db/db.redis.mjs"

const CAPTCHA_PREFIX = "captcha:";

export const saveCaptcha = async (key, value, ttlSec = 180) => {
    await redis.setex(`${CAPTCHA_PREFIX}${key}`, ttlSec, value.toLowerCase());
}

export const getCaptcha = async (key) => {
    return await redis.get(`${CAPTCHA_PREFIX}${key}`);
}

export const deleteCaptcha = async (key) => {
    await redis.del(`${CAPTCHA_PREFIX}${key}`);
}

export default {
    saveCaptcha,
    getCaptcha,
    deleteCaptcha
}