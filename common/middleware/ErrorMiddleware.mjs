import { StatusCodes } from "http-status-codes"
import { HttpError } from 'http-errors'

export const ErrorHandler = (err, req, res, next) => {
    if (err instanceof HttpError) {
        return res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message,
        });
    }

    if (err.message) {
        return res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: err.message
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: {
            en: "An unexpected error occurred.",
            fa: "خطای غیرمنتظره‌ای رخ داده است"
        }
    });
};


export const NotFoundError = (req, res, next) => {
    res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: {
            fa: "Route not found",
            en: "آدرس مورد نظر یافت نشد",
        }
    });
};