import { createLocalizedSuccess, createLocalizedError } from "../../common/locale/localizationHelper.mjs"
import { registerValidationSchema, LoginValidationSchema } from "./auth.validator.mjs"
import authService from "./auth.service.mjs"
import passport from "passport";

export const register = async (req, res, next) => {
    try {
        await registerValidationSchema.validate(req.body, { abortEarly: false });

        const { _id, __v, password, googleId, ...data } = await authService.registerUser(req.body);

        return createLocalizedSuccess(res, 'Register', data);
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    await LoginValidationSchema.validate(req.body, { abortEarly: false });
    passport.authenticate('local-login', async (err, user, info) => {

        if (info) {
            next(createLocalizedError(info))
        }

        try {
            req.user = user
            const data = await authService.loginUser(user)
            return createLocalizedSuccess(res, 'LoginSuccess', data);
        } catch (error) {
            next(error);
        }
    })(req, res, next);
}

export const send = async (req, res, next) => {

}


export default { register, login, send }