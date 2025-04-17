const captchaRouter = require('../module/captcha/captcha.route');
const authRouter = require('../module/auth/auth.route');

const version = process.env.version

const setupRoutes = (app) => {
    app.use(`/api/${version}/captcha`, captchaRouter);
    app.use(`/api/${version}/auth`, authRouter)

};

module.exports = setupRoutes 
