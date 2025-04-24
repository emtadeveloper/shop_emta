// controller/article.controller.mjs
import * as ArticleService from './article.service.mjs';
import { createLocalizedSuccess } from '../../common/locale/localizationHelper.mjs';
import { parseJsonFields } from '../../common/util/parseJsonFields.mjs';
import { deleteInvalidPropertyObject } from '../../common/util/deleteInvalidPropertyObject.mjs';
import { generateUniqueSlug } from '../../common/util/generateUniqueSlug.mjs';

export const createArticle = async (req, res, next) => {
    try {
        const parsed = parseJsonFields(req.body);
        const slug = await generateUniqueSlug(parsed.title);
        const body = deleteInvalidPropertyObject({ ...parsed, file: req.file, author: req.user._id, slug });

        const article = await ArticleService.createArticle(body);
        return createLocalizedSuccess(res, 'success', article);

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