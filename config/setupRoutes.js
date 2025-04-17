const captchaRouter = require('../module/captcha/captcha.route');

const version = process.env.version

const setupRoutes = (app) => {
    app.use(`/api/${version}/captcha`, captchaRouter)
};

module.exports = setupRoutes 
