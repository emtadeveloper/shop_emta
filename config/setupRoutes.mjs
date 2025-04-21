import authRouter from '../module/auth/auth.route.mjs'
import captchaRouter from "../module/captcha/captcha.route.mjs";
import userRouter from "../module/user/user.route.mjs";
import themeRouter from "../module/theme/theme.route.mjs";

import Auth from "../common/middleware/AuthMiddleware.mjs";

const version = process.env.version

const setupRoutes = async (app) => {
    app.use(`/api/${version}/captcha`, captchaRouter);
    app.use(`/api/${version}/auth`, authRouter)
    app.use(`/api/${version}/user`, Auth, userRouter)
    app.use(`/api/${version}/theme`, Auth, themeRouter)

};

export default setupRoutes