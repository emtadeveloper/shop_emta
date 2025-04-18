import services from "./captcha.service.mjs"

export const getCaptcha = async (req, res, next) => {
    try {
        const id = req.params.id;
        const captcha = services.generateCaptchaSvg();
        await services.storeCaptcha(id, captcha.text);
        res.type("svg");
        res.send(captcha.data);
    } catch (error) {
        next(error);
    }
};
