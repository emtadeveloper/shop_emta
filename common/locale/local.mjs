export const messages = {
    captchaStoreError: {
        fa: "خطا در ذخیره‌سازی کپچا",
        en: "Error storing captcha",
        status: 500,
    },
    captchaNotFound: {
        fa: "کپچای مورد نظر پیدا نشد",
        en: "Captcha not found",
        status: 404,
    },
    successCreateAddress: {
        fa: "آدرس با موفقیت ایجاد شد",
        en: "Address created successfully",
        status: 201,
    },
    successUpdateAddress: {
        fa: "آدرس با موفقیت روزرسانی ایجاد شد",
        en: "Address updated successfully",
        status: 200,
    },
    invalidUserId: {
        fa: "شناسه کاربر معتبر نیست",
        en: "Invalid user ID",
        status: 400,
    },
    successDeleteAddress: {
        fa: "آدرس با موفقیت حذف  شد",
        en: "Address deleted successfully",
        status: 200,
    },
    addressNotFound: {
        fa: "آدرس پیدا نشد",
        en: "Address not found",
        status: 404,
    },
    noChangesDetected: {
        fa: "هیچ تغییری در آدرس یافت نشد",
        en: "No changes detected in the address",
        status: 400,
    },
    postalCodeRequired: {
        fa: "وارد کردن کد پستی الزامی است.",
        en: "Postal code is required.",
        status: 400
    },
    typeAddressRequired: {
        fa: "نوع آدرس الزامی است.",
        en: "Address type is required.",
        status: 400
    },
    addressRequired: {
        fa: "وارد کردن آدرس الزامی است.",
        en: "Address is required.",
        status: 400
    },
    cityIdRequired: {
        fa: "وارد کردن شناسه شهر الزامی است.",
        en: "City ID is required.",
        status: 400
    },
    locationLatRequired: {
        fa: "وارد کردن عرض جغرافیایی الزامی است.",
        en: "Latitude is required.",
        status: 400
    },
    locationLngRequired: {
        fa: "وارد کردن طول جغرافیایی الزامی است.",
        en: "Longitude is required.",
        status: 400
    },
    invalidCityId: {
        fa: "شناسه شهر نامعتبر است.",
        en: "Invalid city ID.",
        status: 400
    },
    invalidAddress: {
        fa: "آدرس وارد شده نامعتبر است.",
        en: "Invalid address.",
        status: 400
    },
    addressTooShort: {
        fa: "آدرس وارد شده خیلی کوتاه است.",
        en: "Address is too short.",
        status: 400
    },
    invalidLocation: {
        fa: "موقعیت جغرافیایی نامعتبر است.",
        en: "Invalid location.",
        status: 400
    },
    invalidLatitude: {
        fa: "عرض جغرافیایی وارد شده نامعتبر است.",
        en: "Invalid latitude value.",
        status: 400
    },
    invalidLongitude: {
        fa: "طول جغرافیایی وارد شده نامعتبر است.",
        en: "Invalid longitude value.",
        status: 400
    },
    invalidPostalCode: {
        fa: "کد پستی وارد شده نامعتبر است.",
        en: "Invalid postal code.",
        status: 400
    },
    postalCodeInvalidLength: {
        fa: "کد پستی باید 10 رقم باشد.",
        en: "Postal code must be 10 digits.",
        status: 400
    },
    invalidAddressType: {
        fa: "نوع آدرس وارد شده نامعتبر است. فقط 'home'، 'work' یا 'other' مجاز است.",
        en: "Invalid address type. Only 'home', 'work' or 'other' are allowed.",
        status: 400
    },
    invalidCaptcha: {
        fa: "کپچا نامعتبر است",
        en: "Invalid captcha",
        status: 400,
    },
    userNotFound: {
        fa: "کاربر یافت نشد",
        en: "User not found",
        status: 404,
    },
    Register: {
        fa: "با موفقیت ساخته شد",
        en: "created success",
        status: 201
    },
    userAlreadyExists: {
        fa: "کاربری با این ایمیل یا نام کاربری قبلاً ثبت‌نام شده است",
        en: "User with this email or username already exists",
        status: 400,
    },
    registerFailed: {
        fa: "فرآیند ثبت‌نام با شکست مواجه شد. لطفاً دوباره تلاش کنید",
        en: "Registration process failed. Please try again",
        status: 400,
    },
    unexpectedError: {
        fa: "خطای غیرمنتظره رخ داده است",
        en: "An unexpected error occurred",
        status: 500,
    },
    phoneAlreadyExists: {
        fa: "این شماره تلفن قبلاً ثبت شده است",
        en: "This phone number is already registered",
        status: 400,
    },
    emailAlreadyExists: {
        fa: "این ایمیل قبلاً ثبت شده است",
        en: "This email is already registered",
        status: 400,
    },
    usernameAlreadyExists: {
        fa: "این نام کاربری قبلاً ثبت شده است",
        en: "This username is already taken",
        status: 400,
    },
    passwordWeak: {
        fa: "رمز عبور باید حداقل 8 کاراکتر داشته باشد و شامل حروف بزرگ، کوچک و اعداد باشد",
        en: "Password must be at least 8 characters long and include uppercase, lowercase letters, and numbers",
        status: 400,
    },
    invalidEmailFormat: {
        fa: "فرمت ایمیل وارد شده صحیح نیست",
        en: "The email format is invalid",
        status: 400,
    },
    invalidPostalCode: {
        fa: "کد پستی وارد شده صحیح نیست",
        en: "The postal code is invalid",
        status: 400,
    },
    invalidLocation: {
        fa: "مختصات مکانی وارد شده صحیح نیست",
        en: "The location coordinates are invalid",
        status: 400,
    },
    passwordMismatch: {
        fa: "رمز عبور با تأییدیه تطابق ندارد",
        en: "Password does not match the confirmation",
        status: 400,
    },
    invalidGoogleId: {
        fa: "شناسه گوگل وارد شده صحیح نیست",
        en: "The Google ID is invalid",
        status: 400,
    },
    registerFailed: {
        fa: "ثبت‌نام با خطا مواجه شد",
        en: "Registration failed",
        status: 500,
    },
    captchaRequired: {
        fa: "کپچا وارد نشده است",
        en: "Captcha is required",
        status: 400,
    },
    captchaNotFound: {
        fa: "کپچای مورد نظر پیدا نشد",
        en: "Captcha not found",
        status: 404,
    },
    invalidCaptcha: {
        fa: "کپچا نامعتبر است",
        en: "Invalid captcha",
        status: 400,
    },
    userNotFound: {
        fa: "کاربر یافت نشد",
        en: "User not found",
        status: 404,
    },
    passwordMismatch: {
        fa: "رمز عبور با تأییدیه تطابق ندارد",
        en: "Password does not match the confirmation",
        status: 400,
    },
    LoginSuccess: {
        fa: "ورود با موفقیت انجام شد",
        en: "success login",
        status: 200
    },
    firstNameRequired: {
        fa: "وارد کردن نام الزامی است",
        en: "First name is required",
        status: 400,
    },
    lastNameRequired: {
        fa: "وارد کردن نام خانوادگی الزامی است",
        en: "Last name is required",
        status: 400,
    },
    phoneRequired: {
        fa: "وارد کردن شماره موبایل الزامی است",
        en: "Phone number is required",
        status: 400,
    },
    invalidPhone: {
        fa: "شماره موبایل معتبر نیست",
        en: "Invalid phone number",
        status: 400,
    },
    emailRequired: {
        fa: "وارد کردن ایمیل الزامی است",
        en: "Email is required",
        status: 400,
    },
    invalidEmail: {
        fa: "ایمیل معتبر نیست",
        en: "Invalid email",
        status: 400,
    },
    passwordRequired: {
        fa: "وارد کردن رمز عبور الزامی است",
        en: "Password is required",
        status: 400,
    },
    passwordMinLength: {
        fa: "رمز عبور باید حداقل ۶ کاراکتر باشد",
        en: "Password must be at least 6 characters",
        status: 400,
    },
    usernameRequired: {
        fa: "وارد کردن نام کاربری الزامی است",
        en: "Username is required",
        status: 400,
    },
    usernameMinLength: {
        fa: "نام کاربری باید حداقل ۳ کاراکتر باشد",
        en: "Username must be at least 3 characters",
        status: 400,
    },
    loginRequired: {
        fa: "وارد کردن ایمیل یا نام کاربری الزامی است",
        en: "Email or username is required",
        status: 400,
    },
    invalidEmailOrUsername: {
        fa: "ایمیل یا نام کاربری وارد شده معتبر نیست",
        en: "Invalid email or username",
        status: 400,
    },
    captchaRequired: {
        fa: "کپچا الزامی است",
        en: "Captcha is required",
        status: 400,
    },
    captchaKeyRequired: {
        fa: "کلید کپچا الزامی است",
        en: "Captcha key is required",
        status: 400,
    },
    sentOtpSuccess: {
        fa: "کد یکبار مصرف برای شما ارسال شد",
        en: "Send Otp Success",
        status: 200,
    },
    identifierAndOtpRequired: {
        fa: " رمزیکبار مصرف و شماره همراه یا ایمیل اجباری می باشد",
        en: "identifier And Otp is Required",
        status: 400,
    },
    otpExpired: {
        en: "otp is expired",
        fa: "رمز یکبار مصرف منقضی شده است ",
        status: 400,
    },
    identifierRequired: {
        fa: "شناسه (ایمیل یا شماره موبایل) الزامی است.",
        en: "Identifier (email or phone number) is required",
        status: 400,
    },
    invalidPhoneOrEmail: {
        fa: "شناسه وارد شده باید شماره موبایل یا ایمیل معتبر باشد.",
        en: "The identifier must be a valid phone number or email",
        status: 400,
    },
    codeRequired: {
        fa: "کد OTP الزامی است.",
        en: "OTP code is required",
        status: 400,
    },
    invalidOtpLength: {
        fa: "کد OTP باید 6 رقمی باشد.",
        en: "OTP code must be 6 digits",
        status: 400,
    },
    captchaKeyRequired: {
        fa: "کلید کپچا الزامی است.",
        en: "Captcha key is required",
        status: 400,
    },
    sentOtpSuccess: {
        fa: "کد یکبار مصرف برای شما ارسال شد.",
        en: "Send Otp Success",
        status: 200,
    },
    identifierAndOtpRequired: {
        fa: "رمز یکبار مصرف و شماره همراه یا ایمیل اجباری می باشد.",
        en: "Identifier and OTP are required",
        status: 400,
    },
    otpExpired: {
        fa: "رمز یکبار مصرف منقضی شده است.",
        en: "OTP is expired",
        status: 400,
    },
    refreshTokenRequired: {
        en: "OTP is required",
        fa: 'رفرش توکن الزامی است',
        status: 400
    },
    InvalidrefreshToken: {
        en: "OTP is invalid",
        fa: 'رفرش توکن نامعتبر است',
        status: 400
    },
    refreshTokenExpire: {
        en: "OTP is expired",
        fa: 'رفرش توکن منقضی شده است',
        status: 400
    },
    loginFailed: {
        en: "The login account was not recognized. Please log in to your account",
        fa: "حساب کاربری جهت ورود شناسایی نشد لطفا وارد حساب کاربری خود شوید",
        status: 401
    },
    success: {
        fa: "با موفقیت دریافت شد",
        en: "success recived data",
        status: 200
    }
};