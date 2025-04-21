import multer from "multer";
import { Readable } from "stream";
import cloudinary from "../../config/cloudinary.mjs";
import { createLocalizedError } from "../../common/locale/localizationHelper.mjs";

const fileFilter = (req, file, cb) => {
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (validTypes.includes(file.mimetype)) {
        return cb(null, true);
    }
    return cb(createLocalizedError("invalidImageFormat"));
};

const storage = multer.memoryStorage();
const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

const bufferToStream = (buffer) => {
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);
    return stream;
};

// Single Cloudinary 

const uploadSingleToCloudinary = (file, folder = "uploads") => {
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

const uploadMultipleToCloudinary = async (files, folder = "uploads") => {
    try {
        return await Promise.all(
            files.map((file) => uploadSingleToCloudinary(file, folder))
        );
    } catch (err) {
        throw createLocalizedError("cloudinaryUploadFailed");
    }
};

export {
    upload,
    uploadSingleToCloudinary,
    uploadMultipleToCloudinary
};
