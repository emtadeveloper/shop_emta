// controller/article.controller.mjs
import * as ArticleService from './article.service.mjs';
import { createLocalizedError, createLocalizedSuccess } from '../../common/locale/localizationHelper.mjs';
import { parseJsonFields } from '../../common/util/parseJsonFields.mjs';
import { deleteInvalidPropertyObject } from '../../common/util/deleteInvalidPropertyObject.mjs';
import mongoose from 'mongoose';

export const createArticle = async (req, res, next) => {
    try {
        // parse JSON string fields if any
        const parsed = parseJsonFields(req.body);
        // remove invalid props and attach file
        const body = deleteInvalidPropertyObject({ ...parsed, file: req.file });

        // validate author id
        if (!mongoose.Types.ObjectId.isValid(body.author)) {
            throw createLocalizedError('invalidAuthorId');
        }

        const article = await ArticleService.createArticle(body);
        return createLocalizedSuccess(res, 'successCreateArticle', article);
    } catch (err) {
        next(err);
    }
};

export const getAllArticles = async (req, res, next) => {
    try {
        const articles = await ArticleService.getAllArticles();
        return createLocalizedSuccess(res, 'success', articles);
    } catch (err) {
        next(err);
    }
};