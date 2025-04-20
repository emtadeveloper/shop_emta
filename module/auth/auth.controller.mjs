import { createLocalizedSuccess, createLocalizedError } from "../../common/locale/localizationHelper.mjs"
import {
    registerValidationSchema, loginValidationSchema, sendOtpValidationSchema,
    otpValidationSchema, refreshTokenValidationSchema, resetPasswordTokenValidationSchema,
    resetPasswordParamsValidationSchema,
    resetPasswordBodyValidationSchema
} from "./auth.validator.mjs"
import authService from "./auth.service.mjs"
import passport from "passport";

export const register = async (req, res, next) => {
    try {
        await registerValidationSchema.validate(req.body, { abortEarly: false });

        const { _id, ...data } = await authService.registerUser(req.body);

        return createLocalizedSuccess(res, 'Register', data);
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    await loginValidationSchema.validate(req.body, { abortEarly: false });
    passport.authenticate('local-login', async (err, user, info) => {

        if (info) {
            return next(createLocalizedError(info))
        }
        try {

            const data = await authService.loginUser(user)
            return createLocalizedSuccess(res, 'LoginSuccess', data);
        } catch (error) {
            next(error);
        }
    })(req, res, next);
}

export const send = async (req, res, next) => {
    try {
        await sendOtpValidationSchema.validate(req.body, { abortEarly: false });

        const data = await authService.sendOtpUser(req.body)

        return createLocalizedSuccess(res, 'sentOtpSuccess', data);

    } catch (error) {
        next(error)
    }
}

export const verify = async (req, res, next) => {
    await otpValidationSchema.validate(req.body, { abortEarly: false });
    passport.authenticate('local-otp', async (err, user, info) => {

        if (info) {
            console.log(info);
            next(createLocalizedError(info))
        }

        try {
            const data = await authService.loginUser(user)
            return createLocalizedSuccess(res, 'LoginSuccess', data);
        } catch (error) {
            next(error);
        }
    })(req, res, next);
}

export const refreshToken = async (req, res, next) => {
    try {
        const { refreshToken } = req.body
        await refreshTokenValidationSchema.validate(req.body)
        const data = await authService.refreshTokenUser(refreshToken);
        return createLocalizedSuccess(res, 'LoginSuccess', data);
    } catch (error) {
        next(error)
    }
}

export const forgotPassword = async (req, res, next) => {
    try {
        await resetPasswordTokenValidationSchema.validate(req.body);

        const data = await authService.forgotPasswordUser(req.body.email);

        return createLocalizedSuccess(res, 'resetPasswordSuccess', data);

    } catch (err) {
        next(err);
    }
};

export const resetPassword = async (req, res, next) => {
    try {

        await resetPasswordParamsValidationSchema.validate(req.params, { abortEarly: false });

        await resetPasswordBodyValidationSchema.validate(req.body, { abortEarly: false });

        const { token } = req.params;
        const { newPassword } = req.body;

        await authService.resetPasswordUser(token, newPassword);

        return createLocalizedSuccess(res, 'formgetPasswordSuccess');

    } catch (error) {
        next(error);
    }
};

export const me = async (req, res, next) => {
    try {
        return createLocalizedSuccess(res, "success", req.user);
    } catch (error) {
        next(error)
    }
}


export default { register, login, send, verify, refreshToken, me }