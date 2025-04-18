import jwt from "jsonwebtoken";
import UserModel from "../../module/user/user.model.mjs";
import { createLocalizedError } from "../locale/localizationHelper.mjs";

const getToken = (headers) => {
    const [bearer, token] = headers?.authorization?.split(" ") || [];
    if (token && ["bearer", "Bearer"].includes(bearer)) {
        return token;
    }
    throw createLocalizedError("loginFailed");
};

const Auth = async (req, res, next) => {
    try {
        const token = getToken(req.headers);

        const payload = await new Promise((resolve, reject) => {
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, decoded) => {
                if (err) return reject(createLocalizedError("loginFailed"));
                resolve(decoded);
            });
        });

        const user = await UserModel.findOne({ _id: payload.id }).populate("role");

        if (!user) {
            throw createLocalizedError("userNotFound");
        }
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
};

export default Auth;
