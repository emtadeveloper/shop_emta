import redis from "../../config/db/db.redis.mjs"

const OTP_PREFIX = "otp:";

export const saveOtp = async (key, value, ttlSec = 300) => {
    await redis.setex(`${OTP_PREFIX}${key}`, ttlSec, value);
}

export const getOtp = async (key) => {
    return await redis.get(`${OTP_PREFIX}${key}`);
}

export const deleteOtp = async (key) => {
    await redis.del(`${OTP_PREFIX}${key}`);
}
