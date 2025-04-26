export const messages = {
    profileNotFound: {
        fa: "کاربر مورد نظر پیدا نشد",
        en: "User not found",
        status: 404,
    },
    userRoleChanged: {
        fa: "با موفقیت به روزرسانی شد",
        en: "success updeate role",
        status: 200
    },
    successUpdateTheme: {
        fa: "تم با موفقیت به‌روزرسانی شد",
        en: "Theme updated successfully",
        status: 200,
    },
    firstNameTooShort: {
        fa: "نام باید حداقل ۲ حرف باشد",
        en: "First name must be at least 2 characters",
        status: 400,
    },
    firstNameTooLong: {
        fa: "نام نمی‌تواند بیشتر از ۵۰ حرف باشد",
        en: "First name cannot be more than 50 characters",
        status: 400,
    },
    lastNameTooShort: {
        fa: "نام خانوادگی باید حداقل ۲ حرف باشد",
        en: "Last name must be at least 2 characters",
        status: 400,
    },
    lastNameTooLong: {
        fa: "نام خانوادگی نمی‌تواند بیشتر از ۵۰ حرف باشد",
        en: "Last name cannot be more than 50 characters",
        status: 400,
    },
    successUpdate: {
        fa: "  موفقیت به‌روزرسانی شد",
        en: " updated successfully",
        status: 200,
    },
    NotAccessDeleted: {
        fa: "شما اجازه حذف این رکورد را ندارید",
        en: " Not Access to deleted Record ",
        status: 200,
    },
    categoryNotFound: {
        fa: 'دسته‌بندی مورد نظر پیدا نشد',
        en: 'Category not found',
        status: 404,
    },
    successCreateCategory: {
        fa: 'دسته‌بندی با موفقیت ایجاد شد',
        en: 'Category created successfully',
        status: 201,
    },
    successUpdateCategory: {
        fa: 'دسته‌بندی با موفقیت به‌روزرسانی شد',
        en: 'Category updated successfully',
        status: 200,
    },
    successDeleteCategory: {
        fa: 'دسته‌بندی با موفقیت حذف شد',
        en: 'Category deleted successfully',
        status: 200,
    },
    notAllowedToDelete: {
        fa: 'شما اجازه حذف این دسته‌بندی را ندارید',
        en: 'You are not allowed to delete this category',
        status: 403,
    },
    categoryCreated: {
        fa: "دسته‌بندی با موفقیت ایجاد شد",
        en: "Category created successfully",
        status: 201,
    },
    categoryUpdated: {
        fa: "دسته‌بندی با موفقیت به‌روزرسانی شد",
        en: "Category updated successfully",
        status: 200,
    },
    categoryDeleted: {
        fa: "دسته‌بندی با موفقیت حذف شد",
        en: "Category deleted successfully",
        status: 200,
    },
    categoryNotFound: {
        fa: "دسته‌بندی مورد نظر پیدا نشد",
        en: "Category not found",
        status: 404,
    },
    categorySlugExists: {
        fa: "نامک وارد شده قبلاً استفاده شده است",
        en: "Slug already exists",
        status: 400,
    },
    invalidCategoryId: {
        fa: "شناسه دسته‌بندی معتبر نیست",
        en: "Invalid category ID",
        status: 400,
    },
    noAccessToDeleteCategory: {
        fa: "شما اجازه حذف این دسته‌بندی را ندارید",
        en: "You are not allowed to delete this category",
        status: 403,
    },
    NotAccessUpdated: {
        fa: "شما اجازه ویرایش این رکورد را ندارید",
        en: " Not Access to Updated Record ",
        status: 200,
    },
    successDelete: {
        fa: "  موفقیت حذف شد",
        en: " deleted successfully",
        status: 200,
    },
    themeNotFound: {
        fa: "تم مورد نظر پیدا نشد",
        en: "Theme not found",
        status: 404,
    },
    readFileError: {
        fa: 'خطا در خواندن فایل اطلاعات',
        en: 'Error reading data file',
        status: 500
    },
    invalidJsonFormat: {
        fa: 'ساختار JSON نامعتبر است',
        en: 'Invalid JSON format',
        status: 500
    },
    successFetchProvinces: {
        fa: 'لیست استان‌ها با موفقیت دریافت شد',
        en: 'Provinces fetched successfully',
        status: 200
    },
    successFetchCities: {
        fa: 'لیست شهرها با موفقیت دریافت شد',
        en: 'Cities fetched successfully',
        status: 200
    },
    successFetchProvinces: {
        fa: "لیست استان‌ها با موفقیت دریافت شد",
        en: "Provinces fetched successfully",
        status: 200
    },
    successFetchCities: {
        fa: "لیست شهرها با موفقیت دریافت شد",
        en: "Cities fetched successfully",
        status: 200
    },
    NotAccess: {
        fa: "شما اجازه دستری به این مسیر را ندارید",
        en: "Not Acess permission",
        status: 403
    },
    roleNameRequired: {
        fa: "نام نقش ضروری است",
        en: "Role name is required",
        status: 400,
    },
    roleNameMinLength: {
        fa: "نام نقش باید حداقل ۳ کاراکتر باشد",
        en: "Role name must be at least 3 characters",
        status: 400,
    },
    roleNameMaxLength: {
        fa: "نام نقش نباید بیشتر از ۵۰ کاراکتر باشد",
        en: "Role name must be at most 50 characters",
        status: 400,
    },
    permissionsRequired: {
        fa: "مجوزها ضروری هستند",
        en: "Permissions are required",
        status: 400,
    },
    permissionsMinLength: {
        fa: "باید حداقل یک مجوز مشخص کنید",
        en: "At least one permission is required",
        status: 400,
    },
    permissionsMaxLength: {
        fa: "تعداد مجوزها نباید بیشتر از ۱۰ باشد",
        en: "No more than 10 permissions allowed",
        status: 400,
    },
    permissionsPositive: {
        fa: "مجوزها باید اعداد مثبت باشند",
        en: "Permissions must be positive numbers",
        status: 400,
    },
    successRole: {
        fa: "ساخت نقش جدید با موفقیت انجام شد",
        en: "success Role create",
        status: 201
    },
    noChangesDetected: {
        fa: "هیچ تغییری در داده‌ها شناسایی نشد",
        en: "No changes detected in the data",
        status: 400
    },
    invalidPermissions: {
        fa: "برخی از مجوزها نامعتبر هستند",
        en: "Some permissions are invalid",
        status: 400
    },
    roleNotFound: {
        fa: "نقش مورد نظر پیدا نشد",
        en: "Role not found",
        status: 404
    },
    invalidRoleId: {
        fa: "شناسه نقش معتبر نیست",
        en: "Invalid role ID",
        status: 400
    },
    missingRoleData: {
        fa: "اطلاعات لازم برای به‌روزرسانی نقش ناقص است",
        en: "Missing required role data",
        status: 400
    },
    successFetchRoles: {
        fa: "لیست نقش‌ها با موفقیت دریافت شد",
        en: "Roles fetched successfully",
        status: 200
    },
    invalidRoleId: {
        fa: "شناسه نقش معتبر نیست",
        en: "Invalid role ID",
        status: 400
    },
    missingRoleData: {
        fa: "نام نقش و مجوزها الزامی هستند",
        en: "Role name and permissions are required",
        status: 400
    },
    invalidPermissions: {
        fa: "برخی از مجوزها نامعتبر هستند",
        en: "Some permissions are invalid",
        status: 400
    },
    duplicateRoleName: {
        fa: "نام نقش تکراری هست",
        en: " duplicate RoleName are invalid",
        status: 400
    },
    roleNotFound: {
        fa: "نقش مورد نظر پیدا نشد",
        en: "Role not found",
        status: 404
    },
    readFileError: {
        fa: "خطا در خواندن فایل",
        en: "Error reading file",
        status: 500
    },
    invalidJsonFormat: {
        fa: "فرمت فایل JSON نامعتبر است",
        en: "Invalid JSON format",
        status: 500
    },
    successDeleteTheme: {
        fa: "تم با موفقیت حذف شد",
        en: "Theme deleted successfully",
        status: 200,
    },
    invalidUpdateData: {
        fa: "داده‌های ارسال شده برای به‌روزرسانی نامعتبر است",
        en: "Invalid data for update",
        status: 400,
    },
    profileUpdateError: {
        fa: "خطا در به‌روزرسانی پروفایل",
        en: "Error updating profile",
        status: 500,
    },
    successUpdateProfile: {
        fa: "پروفایل با موفقیت به‌روزرسانی شد",
        en: "Profile updated successfully",
        status: 200,
    },
    currentPasswordRequired: {
        fa: "وارد کردن گذرواژه فعلی الزامی است",
        en: "Current password is required",
        status: 400,
    },
    newPasswordRequired: {
        fa: "وارد کردن گذرواژه جدید الزامی است",
        en: "New password is required",
        status: 400,
    },
    confirmPasswordRequired: {
        fa: "تأیید گذرواژه جدید الزامی است",
        en: "Please confirm your new password",
        status: 400,
    },
    passwordsMustMatch: {
        fa: "گذرواژه جدید و تأیید آن باید یکسان باشند",
        en: "New password and its confirmation must match",
        status: 400,
    },
    invalidCurrentPassword: {
        fa: "گذرواژه فعلی اشتباه است",
        en: "Current password is incorrect",
        status: 401,
    },
    passwordUpdateError: {
        fa: "خطا در به‌روزرسانی گذرواژه",
        en: "Error updating password",
        status: 500,
    },
    successUpdatePassword: {
        fa: "گذرواژه با موفقیت به‌روزرسانی شد",
        en: "Password updated successfully",
        status: 200,
    },
    captchaStoreError: {
        fa: "خطا در ذخیره‌سازی کپچا",
        en: "Error storing captcha",
        status: 500,
    },
    avatarRequired: {
        fa: "تصویر پروفایل الزامی است",
        en: "Avatar  is required",
        status: 400,
    },
    invalidAvatarType: {
        fa: "فرمت تصویر معتبر نیست (فقط jpg، png یا webp مجاز است)",
        en: "Invalid image format (only jpg, png, or webp allowed)",
        status: 400,
    },
    avatarNotFound: {
        fa: "تصویر آواتار یافت نشد",
        en: "Avatar not found",
        status: 404,
    },
    successDeleteAvatar: {
        fa: "تصویر آواتار با موفقیت حذف شد",
        en: "Avatar deleted successfully",
        status: 200,
    },
    successGetAvatar: {
        fa: "تصویر آواتار با موفقیت دریافت شد",
        en: "Avatar fetched successfully",
        status: 200,
    },
    avatarTooLarge: {
        fa: "حجم تصویر نباید بیشتر از ۲ مگابایت باشد",
        en: "Image size must not exceed 2MB",
        status: 400,
    },
    successSetAvatar: {
        fa: "تصویر پروفایل با موفقیت ثبت شد",
        en: "Avatar set successfully",
        status: 200,
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
    invalidImageFormat: {
        fa: "فرمت تصویر ارسالی معتبر نیست",
        en: "Invalid image format",
        status: 400,
    },
    cloudinaryUploadFailed: {
        fa: "آپلود فایل به کلودینری با شکست مواجه شد",
        en: "Upload to Cloudinary failed",
        status: 500,
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
    resetPasswordSuccess: {
        fa: "لینک بازنشانی رمز عبور با موفقیت ارسال شد",
        en: "Password reset link sent successfully",
        status: 200
    },
    formgetPasswordSuccess: {
        fa: "رمز عبور با موفقیت تغیر کرد",
        en: "Password changed successfully",
        status: 200
    },
    success: {
        fa: "با موفقیت دریافت شد",
        en: "success recived data",
        status: 200
    },
    invalidOrExpiredToken: {
        fa: "توکن نامعتبر است یا منقضی شده است",
        en: "The token is invalid or has expired",
        status: 400
    },
    tokenRequired: {
        fa: "توکن الزامی است",
        en: "Token is required",
        status: 400
    }

};