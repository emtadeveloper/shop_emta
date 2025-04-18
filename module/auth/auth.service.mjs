import { createLocalizedError, } from "../../common/locale/localizationHelper.mjs"
import UserModel from '../user/user.model.mjs'
import RoleModel from '../role/role.model.mjs'
import { generateAccessToken, generateRefreshToken } from "../../common/util/token.mjs";
import speakeasy from 'speakeasy'
import { saveOtp } from "./auth.model.mjs";
import sendSms from "../../common/util/smsSender.mjs"
import sendMail from "../../common/util/mailer.mjs"
import jwt from "jsonwebtoken";
import redis from "../../config/db/db.redis.mjs";

export const registerUser = async (userData) => {
    const { email, username } = userData;
    const exists = await UserModel.findOne({ $or: [{ email }, { username }] });

    if (exists) {
        throw createLocalizedError("userAlreadyExists");
    }

    const userCount = await UserModel.countDocuments();

    if (userCount === 0) {
        const roles = await RoleModel.findOne({ roleName: "admin" });
        const createUser = await UserModel.create({ ...userData, role: roles._id });
        return createUser.toObject();
    }

    const roles = await RoleModel.findOne({ roleName: "user" });
    const createUser = await UserModel.create({ ...userData, role: roles._id });
    return createUser.toObject();

};

export const loginUser = async (userData) => {
    const accessToken = await generateAccessToken(userData)
    const refreshToken = await generateRefreshToken(userData)
    return { accessToken, refreshToken }
};

export const sendOtpUser = async (userData) => {
    const { identifier } = userData
    console.log(identifier);
    const query = identifier.includes('@') ? { email: identifier } : { username: identifier };
    const exists = await UserModel.findOne(query)

    if (!exists) {
        throw createLocalizedError("userNotFound");
    }

    const otpSecret = speakeasy.totp({
        secret: speakeasy.generateSecret().base32,
        encoding: 'base32',
        digits: 6
    });

    await saveOtp(exists._id, otpSecret)

    identifier.includes('@')
        ? await sendMail(exists.email, "Your OTP Code", `Your OTP code is: ${otpSecret}`)
        : await sendSms({ toNum: exists.phone, code: otpSecret });

    return { otpSecret };
}

export const refreshTokenUser = async (token) => {

    const payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET_KET);
    const existUser = await UserModel.findOne({ id: payload._id }).populate("role")

    if (!existUser) {
        throw createLocalizedError("userNotFound");
    }

    const savedToken = await redis.get(`refresh:${existUser._id}`);

    if (!savedToken) {
        throw createLocalizedError("refreshTokenExpire");
    }

    if (token !== savedToken) {
        throw createLocalizedError("InvalidrefreshToken");
    }

    const accessToken = await generateAccessToken(existUser)
    const refreshToken = await generateRefreshToken(existUser)

    return { accessToken, refreshToken }

}

export default { registerUser, loginUser, sendOtpUser, refreshTokenUser }
