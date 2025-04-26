export default {
    permissions: [1, 2, 3, 4, 5, 6],

    MongoIDPattern: /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i,

    ROLES: Object.freeze({
        USER: "USER",
        ADMIN: "ADMIN",
    }),

    PERMISSIONS: Object.freeze({
        USER: [1, 2, 3],
        ADMIN: [1, 2, 3, 4, 5, 6,],
    }),

    ALLOWED_SEARCH_FIELDS: ['firstName', 'lastName', 'phone', 'email'],

    TemplateResetPassword(resetUrl) {
        return `
        <p>برای تغییر رمز عبور، روی لینک زیر کلیک کنید:</p>
        <a href="${resetUrl}" style="color: #007bff;">تغییر رمز عبور</a>
        <p>این لینک تا ۱۰ دقیقه معتبر است.</p>
        `;
    }
} 
