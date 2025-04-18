import { createLocalizedSuccess } from "../../common/locale/localizationHelper.mjs"
import { registerValidationSchema } from "./auth.validator.mjs"
import authService from "./auth.service.mjs"

export const register = async (req, res, next) => {
    try {
        await registerValidationSchema.validate(req.body, { abortEarly: false });

        const { _id, __v, password, googleId, ...data } = await authService.registerUser(req.body);

        return createLocalizedSuccess(res, 'Register', data);
    } catch (error) {
        next(error);
    }
}

export default { register }