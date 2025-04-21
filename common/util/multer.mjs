import multer from "multer";
import path from "path";
import createError from "http-errors";
import { Readable } from "stream";
import cloudinary from "../../config/cloudinary.mjs";

const bufferToStream = (buffer) => {
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);
    return stream;
};

const storage = multer.memoryStorage();

function fileFilter(req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    const mimetypes = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
    if (mimetypes.includes(ext)) {
        return cb(null, true);
    }
    return cb(createError.BadRequest("فرمت ارسال شده تصویر صحیح نمیباشد"));
}

const pictureMaxSize = 1 * 1000 * 1000;

export const uploadFile = multer({
    storage,
    fileFilter,
    limits: { fileSize: pictureMaxSize }
});

// Single Cloudinary

export const uploadSingleToCloudinary = (file, folder = "uploads") => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder },
            (error, result) => {
                if (error) return reject(createLocalizedError("cloudinaryUploadFailed"));
                resolve({
                    imageUrl: result.secure_url,
                    public_id: result.public_id,
                });
            }
        );
        bufferToStream(file.buffer).pipe(stream);
    });
};

// Multi Cloudinary

export const uploadMultipleToCloudinary = async (files, folder = "uploads") => {
    try {
        return await Promise.all(
            files.map((file) => uploadSingleToCloudinary(file, folder))
        );
    } catch (err) {
        throw createLocalizedError("cloudinaryUploadFailed");
    }
};

export default { uploadFile, uploadSingleToCloudinary, uploadMultipleToCloudinary }