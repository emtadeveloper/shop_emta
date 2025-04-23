import * as CategoryService from './category.service.mjs';
import { createLocalizedError, createLocalizedSuccess } from "../../common/locale/localizationHelper.mjs";
import { parseJsonFields } from "../../common/util/parseJsonFields.mjs"
import mongoose from 'mongoose';
import { deleteInvalidPropertyObject } from '../../common/util/deleteInvalidPropertyObject.mjs';

export const createCategory = async (req, res, next) => {
    try {

        const parseFields = parseJsonFields(req.body);

        const body = deleteInvalidPropertyObject({ ...parseJsonFields(parseFields), file: req.file })

        const Category = await CategoryService.createCategory(body);

        return createLocalizedSuccess(res, "successCreateCategory", Category)
    } catch (err) {
        next(err);
    }
};

export const getAllCategories = async (req, res, next) => {
    try {
        const categories = await CategoryService.getAllCategories();

        return createLocalizedSuccess(res, "success", categories)
    } catch (err) {
        next(err);
    }
};

export const getCategoryById = async (req, res, next) => {
    try {
        const category = await CategoryService.getCategoryById(req.params.id);
        return createLocalizedSuccess(res, "success", category)
    } catch (err) {
        next(err);
    }
};

export const updateCategory = async (req, res, next) => {
    try {

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw createLocalizedError('invalidCategoryId')
        }

        const body = parseJsonFields(req.body)

        const updated = await CategoryService.updateCategory(id, { ...body, file: req.file });

        return createLocalizedSuccess(res, "successUpdate", updated)
    } catch (err) {
        next(err);
    }
};

export const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw createLocalizedError('invalidCategoryId')
        }
        await CategoryService.deleteCategory(id);

        return createLocalizedSuccess(res, "successDeleteCategory")
    } catch (err) {
        next(err);
    }
};
