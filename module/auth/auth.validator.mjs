import yup from 'yup';
import { messages } from '../../common/locale/local.mjs';

export const registerValidationSchema = yup.object({
    firstName: yup
        .string()
        .trim()
        .required(messages.firstNameRequired),

    lastName: yup
        .string()
        .trim()
        .required(messages.lastNameRequired),

    phone: yup
        .string()
        .trim()
        .matches(/^09\d{9}$/, messages.invalidPhone)
        .required(messages.phoneRequired),

    email: yup
        .string()
        .trim()
        .lowercase()
        .email(messages.invalidEmail)
        .required(messages.emailRequired),

    password: yup
        .string()
        .min(6, messages.passwordMinLength)
        .required(messages.passwordRequired),

    username: yup
        .string()
        .trim()
        .min(3, messages.usernameMinLength)
        .required(messages.usernameRequired),
});

export const loginValidationSchema = yup.object({
    login: yup
        .string()
        .trim()
        .required(messages.loginRequired)
        .test(
            'is-username-or-email',
            messages.invalidEmailOrUsername,
            function (value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
                return emailRegex.test(value) || usernameRegex.test(value);
            }
        ),

    password: yup
        .string()
        .min(6, messages.passwordMinLength)
        .required(messages.passwordRequired),

    captcha: yup
        .string()
        .trim()
        .required(messages.captchaRequired),

    captchaKey: yup
        .string()
        .trim()
        .required(messages.captchaKeyRequired),
});

export const sendOtpValidationSchema = yup.object({
    identifier: yup
        .string()
        .trim()
        .required(messages.identifierRequired)
        .test(
            'is-phone-or-email',
            messages.invalidPhoneOrEmail,
            function (value) {
                const phoneRegex = /^09\d{9}$/;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return phoneRegex.test(value) || emailRegex.test(value);
            }
        )
});

export const otpValidationSchema = yup.object({
    identifier: yup
        .string()
        .trim()
        .required(messages.identifierRequired)
        .test(
            'is-phone-or-email',
            messages.invalidPhoneOrEmail,
            function (value) {
                const phoneRegex = /^09\d{9}$/;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return phoneRegex.test(value) || emailRegex.test(value);
            }
        ),

    code: yup
        .string()
        .trim()
        .length(6, messages.invalidOtpLength)
        .required(messages.codeRequired)
});