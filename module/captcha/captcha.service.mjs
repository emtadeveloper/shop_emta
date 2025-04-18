import svgCaptcha from "svg-captcha"
import { saveCaptcha, getCaptcha, deleteCaptcha } from "./captcha.model.mjs"
import { createLocalizedError } from '../../common/locale/localizationHelper.mjs'

export const generateCaptchaSvg = () => {
    return svgCaptcha.create({ size: 5, noise: 2, color: true });
};

export const storeCaptcha = async (key, text) => {
    try {
        await saveCaptcha(key, text);
        throw createLocalizedError("captchaStoreError");
    } catch (error) {
    }
};

export const verifyCaptcha = async (key, input) => {
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

export default {
    generateCaptchaSvg,
    storeCaptcha,
    verifyCaptcha
};