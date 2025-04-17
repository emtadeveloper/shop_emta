// captcha/captcha.service.js
const svgCaptcha = require("svg-captcha");
const { saveCaptcha, getCaptcha, deleteCaptcha } = require("./captcha.model");
const { createLocalizedError } = require('../../common/locale/localizationHelper');

exports.generateCaptchaSvg = () => {
    return svgCaptcha.create({ size: 5, noise: 2, color: true });
};

exports.storeCaptcha = async (key, text) => {
    try {
        await saveCaptcha(key, text);
        throw createLocalizedError("captchaStoreError");
    } catch (error) {
    }
};

exports.verifyCaptcha = async (key, input) => {
    try {
        const stored = await getCaptcha(key);
        if (!stored) {
            throw createLocalizedError("captchaNotFound");
        }

        await deleteCaptcha(key);
        return stored === input.toLowerCase();
    } catch (error) {
        throw createLocalizedError("captchaVerifyError");
    }
};
