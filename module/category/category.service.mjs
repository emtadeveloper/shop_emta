import Category from './category.model.mjs';
import { uploadSingleToCloudinary } from "../../common/util/multer.mjs"
import { createLocalizedError } from '../../common/locale/localizationHelper.mjs';

export const createCategory = async ({ file, ...data }) => {
    try {

        const { imageUrl, public_id } = await uploadSingleToCloudinary(file, "icons");

        const category = await Category.create({
            ...data,
            icon: {
                imageUrl, public_id
            }
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

export const updateCategory = async (id, { file, ...updates }) => {
    try {

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
