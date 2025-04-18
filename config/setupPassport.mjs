import LocalStrategy from 'passport-local';
import userModel from '../module/user/user.model.mjs';
import { getCaptcha, deleteCaptcha } from '../module/captcha/captcha.model.mjs';

LocalStrategy.Strategy

export default (passport) => {
    passport.use('local-login', new LocalStrategy(
        {
            usernameField: 'login',
            passReqToCallback: true
        },
        async (req, login, password, done) => {
            try {
                const captchaResponse = req.body.captcha;
                const captchaKey = req.body.captchaKey;

                if (!captchaResponse || !captchaKey) {
                    return done(null, false, 'captchaRequired');
                }

                const storedCaptcha = await getCaptcha(captchaKey);
                if (!storedCaptcha) {
                    return done(null, false, 'captchaNotFound');
                }

                if (storedCaptcha !== captchaResponse.toLowerCase()) {
                    return done(null, false, 'invalidCaptcha');
                }

                await deleteCaptcha(captchaKey);

                const query = login.includes('@') ? { email: login } : { username: login };
                const user = await userModel.findOne(query).populate("role")

                if (!user) {
                    return done(null, false, 'userNotFound');
                }

                const isMatch = await user.comparePassword(password);
                if (!isMatch) {
                    return done(null, false, 'passwordMismatch');
                }

                return done(null, user);

            } catch (error) {
                console.error(error);
                return done(error);
            }
        }
    ));
};
