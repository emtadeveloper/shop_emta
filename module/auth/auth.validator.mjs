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

export const LoginValidationSchema = yup.object({
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
