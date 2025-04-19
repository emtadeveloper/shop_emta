import LocalStrategy from 'passport-local';
import UserModel from '../module/user/user.model.mjs';
import { getCaptcha, deleteCaptcha } from '../module/captcha/captcha.model.mjs';
import { deleteOtp, getOtp } from '../module/auth/auth.model.mjs';

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
                const user = await UserModel.findOne(query)

                if (!user) {
                    return done(null, false, 'userNotFound');
                }

                const isMatch = await user.comparePassword(password);
                if (!isMatch) {
                    return done(null, false, 'passwordMismatch');
                }

                req.user = user

                return done(null, user);

            } catch (error) {
                console.error(error);
                return done(error);
            }
        }
    ));
    passport.use('local-otp', new LocalStrategy(
        {
            usernameField: 'identifier',
            passwordField: 'code',
            passReqToCallback: true
        },
        async (req, identifier, code, done) => {
            try {
                console.log(identifier, code);
                if (!code) {
                    return done(null, false, 'codeRequired');
                }
                if (!identifier) {
                    return done(null, false, 'identifierRequired');
                }

                const query = identifier.includes('@') ? { email: identifier } : { username: identifier };
                const user = await UserModel.findOne(query)

                if (!user) {
                    return done(null, false, 'userNotFound');
                }

                const storedOtp = await getOtp(user._id);
                console.log(storedOtp);

                if (!storedOtp || storedOtp !== code) {
                    return done(null, false, 'otpExpired');
                }

                await deleteOtp(user._id);

                req.user = user

                return done(null, user);

            } catch (error) {
                console.error(error);
                return done(error);
            }
        }
    ));
};
