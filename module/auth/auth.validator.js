const yup = require('yup');

exports.registerValidationSchema = yup.object({
    firstName: yup
        .string()
        .trim()
        .required('وارد کردن نام الزامی است'),

    lastName: yup
        .string()
        .trim()
        .required('وارد کردن نام خانوادگی الزامی است'),

    phone: yup
        .string()
        .trim()
        .matches(/^09\d{9}$/, 'شماره موبایل معتبر نیست')
        .required('وارد کردن شماره موبایل الزامی است'),

    email: yup
        .string()
        .trim()
        .lowercase()
        .email('ایمیل معتبر نیست')
        .required('وارد کردن ایمیل الزامی است'),

    password: yup
        .string()
        .min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد')
        .required('وارد کردن رمز عبور الزامی است'),

    username: yup
        .string()
        .trim()
        .min(3, 'نام کاربری باید حداقل ۳ کاراکتر باشد')
        .required('وارد کردن نام کاربری الزامی است'),
});
