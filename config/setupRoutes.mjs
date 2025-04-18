import authRouter from '../module/auth/auth.route.mjs'
import captchaRouter from "../module/captcha/captcha.route.mjs";

const version = process.env.version

const setupRoutes = async (app) => {
    console.log("setupRoutes is running...");
    app.use(`/api/${version}/captcha`, captchaRouter);
    app.use(`/api/${version}/auth`, authRouter)
};

export default setupRoutes