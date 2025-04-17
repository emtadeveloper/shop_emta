const { createLocalizedSuccess } = require("../../common/locale/localizationHelper");
const { registerValidationSchema } = require("./auth.validator");
const authService = require("./auth.service");

exports.register = async (req, res, next) => {
    try {
        await registerValidationSchema.validate(req.body, { abortEarly: false });

        const { _id, __v, password, googleId, ...data } = await authService.registerUser(req.body);

        return createLocalizedSuccess(res, 'Register', data);
    } catch (error) {
        next(error);
    }
}