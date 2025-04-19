import { StatusCodes } from "http-status-codes"
import { messages } from './local.mjs'

class LocalizedError extends Error {
    constructor({ fa, en, status = StatusCodes.INTERNAL_SERVER_ERROR }) {
        super(en || fa || "Unexpected error");
        this.message = { fa, en };
        this.status = status;
    }
}

export const createLocalizedError = (key) => {
    if (!messages[key]) {
        throw new Error(`خطای تعریف نشده: ${key}`);
    }

    return new LocalizedError(messages[key]);
};




class LocalizedSuccess {
    constructor({ fa, en, status }, data = null) {
        this.message = { fa, en, status };
        this.data = data;
    }

    sendResponse(res) {
        const response = {
            success: true,
            message: this.message,
        };

        if (this.data) {
            response.data = this.data;
        }

        return res.status(this.message.status).json(response);
    }
}


export const createLocalizedSuccess = (res, key, data = null) => {
    if (!messages[key]) {
        throw new Error(`پیام موفقیت تعریف نشده: ${key}`);
    }
    const success = new LocalizedSuccess(messages[key], data);
    return success.sendResponse(res);
};