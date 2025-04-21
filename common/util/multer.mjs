import multer from "multer";
import path from "path";
import { Readable } from "stream";
import cloudinary from "../../config/cloudinary.mjs";
import { createLocalizedError } from "../locale/localizationHelper.mjs";

const bufferToStream = (buffer) => {
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);
    return stream;
};

const storage = multer.memoryStorage();

const pictureMaxSize = 2 * 1000 * 1000; // 2MB

const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const mimetypes = [".jpg", ".jpeg", ".png", ".gif"];

    if (!mimetypes.includes(ext)) {
        return cb(createLocalizedError("invalidAvatarType"));
    }

    return cb(null, true);
};

export const uploadFile = multer({
    storage,
    fileFilter,
    limits: { fileSize: pictureMaxSize }
});

export const uploadAvatar = (req, res, next) => {
    uploadFile.single("avatar")(req, res, (err) => {
        if (err) {
            if (err.code === "LIMIT_FILE_SIZE") {
                return next(createLocalizedError("avatarTooLarge"));
            }
            return next(err);
        }
        next();
    });
};

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


export default { uploadAvatar, uploadSingleToCloudinary, uploadMultipleToCloudinary }