const { StatusCodes } = require("http-status-codes");
const { errors } = require('./local');

class LocalizedError extends Error {
    constructor({ fa, en, status = StatusCodes.INTERNAL_SERVER_ERROR }) {
        super(en || fa || "Unexpected error");
        this.message = { fa, en };
        this.status = status;
    }
}

exports.createLocalizedError = (key) => {
    if (!errors[key]) {
        throw new Error(`خطای تعریف نشده: ${key}`);
    }

    return new LocalizedError(errors[key]);
};
