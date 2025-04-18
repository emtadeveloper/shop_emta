
import jwt from "jsonwebtoken";
import redis from "../../config/db/db.redis.mjs";

export const generateAccessToken = (user) => {
    return jwt.sign({ id: user._id, roleName: user.role.roleName, permissions: user.role.permissions }, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: '1h' });
};

export const generateRefreshToken = async (user) => {
    const token = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET_KET, { expiresIn: '3h' });
    await redis.set(`refresh:${user._id}`, token, 'EX', 3 * 60 * 60);
    return token
};
