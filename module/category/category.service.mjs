import Category from './category.model.mjs';
import { uploadSingleToCloudinary } from "../../common/util/multer.mjs"
import { createLocalizedError } from '../../common/locale/localizationHelper.mjs';
import cloudinary from '../../config/cloudinary.mjs';

export const createCategory = async ({ file, ...data }) => {
    try {


        if (file) {
            const { imageUrl, public_id } = await uploadSingleToCloudinary(file, "icons");
            data.icon = {
                imageUrl, public_id
            }
        }

        const category = await Category.create({
            ...data
        });


        if (!category) {
            throw createLocalizedError("userNotFound");
        }

        return category

    } catch (error) {
        throw error
    }
};

export const getAllCategories = async () => {
    try {
        return await Category.find().populate('subCategories').lean();
    } catch (error) {
        throw error
    }
};

export const getCategoryById = async (id) => {
    try {
        return await Category.findById(id).populate('subCategories').lean();
    } catch (error) {
        throw error
    }
};

export const updateCategory = async (id, updates) => {
    try {

        const category = await Category.findOne({ _id: id })

        if (!updates.file && category?.icon?.public_id) {
            await cloudinary.uploader.destroy(category.icon.public_id);
            delete updates.icon
        }

        if (!updates?.parent) {
            updates.parent = null
        }

        const updated = await Category.findByIdAndUpdate(id, { ...updates }, { new: true }).lean();


        if (!updated) {
            throw createLocalizedError("userNotFound");
        }

        return updated

    } catch (error) {
        throw error
    }
};

export const deleteCategory = async (id) => {
    try {
        return await Category.findByIdAndDelete(id);
    } catch (error) {
        throw error
    }
};
