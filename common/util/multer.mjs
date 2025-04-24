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

const avatarExtensions = [".jpg", ".jpeg", ".png", ".gif"];
const iconExtensions = [...avatarExtensions, ".svg"];
const videoExtensions = [".mp4", ".mov", ".avi", ".mkv", ".webm"];
const videoMaxSize = 100 * 1000 * 1000; // 100MB

const fileFilter = (allowedExtensions) => (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
        return cb(createLocalizedError("invalidFileType"));
    }
    return cb(null, true);
};

export const uploadFile = (allowedExtensions) => multer({
    storage,
    fileFilter: fileFilter(allowedExtensions),
    limits: { fileSize: pictureMaxSize }
});

export const uploadAvatar = (req, res, next) => {
    const uploadAvatarFile = uploadFile(avatarExtensions);
    uploadAvatarFile.single("avatar")(req, res, (err) => {
        if (err) {
            if (err.code === "LIMIT_FILE_SIZE") {
                return next(createLocalizedError("avatarTooLarge"));
            }
            return next(err);
        }
        next();
    });
};

export const uploadIcon = (req, res, next) => {
    const uploadIconFile = uploadFile(iconExtensions);
    uploadIconFile.single("icon")(req, res, (err) => {
        if (err) {
            if (err.code === "LIMIT_FILE_SIZE") {
                return next(createLocalizedError("iconTooLarge"));
            }
            return next(err);
        }
        next();
    });
};

export const uploadSingleToCloudinary = (file, folder = "uploads") => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder },
            (error, result) => {
                if (error) {
                    console.log("خطای آپلود به Cloudinary: ", error);
                    return reject(createLocalizedError("cloudinaryUploadFailed"));
                }
                resolve({
                    imageUrl: result.secure_url,
                    public_id: result.public_id,
                });
            }
        );
        bufferToStream(file.buffer).pipe(stream);
    });
};

export const uploadMultipleToCloudinary = async (files, folder = "uploads") => {
    try {
        return await Promise.all(
            files.map((file) => uploadSingleToCloudinary(file, folder))
        );
    } catch (err) {
        console.log("خطای آپلود چندگانه به Cloudinary: ", err);
        throw createLocalizedError("cloudinaryUploadFailed");
    }
};

export const uploadVideoFile = () =>
    multer({
        storage,
        fileFilter: fileFilter(videoExtensions),
        limits: { fileSize: videoMaxSize },
    });

export const uploadVideo = (req, res, next) => {
    const upload = uploadVideoFile();
    upload.single("video")(req, res, (err) => {
        if (err) {
            if (err.code === "LIMIT_FILE_SIZE") {
                return next(createLocalizedError("videoTooLarge"));
            }
            return next(err);
        }
        next();
    });
};

export const uploadVideoToCloudinary = (file, folder = "videos") => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: "video",
            },
            (error, result) => {
                if (error) {
                    console.log("خطای آپلود ویدیو به Cloudinary:", error);
                    return reject(createLocalizedError("cloudinaryUploadFailed"));
                }
                resolve({
                    videoUrl: result.secure_url,
                    public_id: result.public_id,
                });
            }
        );
        bufferToStream(file.buffer).pipe(stream);
    });
};

export default {
    uploadAvatar, uploadIcon, uploadSingleToCloudinary,
    uploadMultipleToCloudinary, uploadVideoFile, uploadVideo,
    uploadVideoToCloudinary
};
