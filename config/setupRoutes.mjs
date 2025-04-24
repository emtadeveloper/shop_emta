import authRouter from '../module/auth/auth.route.mjs'
import captchaRouter from "../module/captcha/captcha.route.mjs";
import userRouter from "../module/user/user.route.mjs";
import themeRouter from "../module/theme/theme.route.mjs";
import cityRouter from "../module/city/city.route.mjs";
import roleRouter from "../module/role/role.route.mjs";
import categoryRouter from "../module/category/category.route.mjs";
import articleRouter from "../module/article/article.route.mjs";
import constant from '../common/constant/index.mjs';
import checkPermissions from "../common/middleware/checkPermissions.mjs"
import Auth from "../common/middleware/authMiddleware.mjs";

const version = process.env.version

const setupRoutes = async (app) => {
    app.use(`/api/${version}/captcha`, captchaRouter);
    app.use(`/api/${version}/auth`, authRouter);
    app.use(`/api/${version}/user`, Auth, userRouter);
    app.use(`/api/${version}/theme`, Auth, themeRouter);
    app.use(`/api/${version}/locations`, cityRouter);
    app.use(`/api/${version}/role`, Auth, checkPermissions(constant.PERMISSIONS.ADMIN), roleRouter);
    app.use(`/api/${version}/category`, Auth, checkPermissions(constant.PERMISSIONS.ADMIN), categoryRouter);
    app.use(`/api/${version}/articles`, Auth, checkPermissions(constant.PERMISSIONS.ADMIN), articleRouter);
};

export default setupRoutes