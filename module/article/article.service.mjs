
// service/article.service.mjs
import Article from '../models/article.model.mjs';
import { uploadSingleToCloudinary } from '../../common/util/multer.mjs';
import { createLocalizedError } from '../../common/locale/localizationHelper.mjs';

export const createArticle = async ({ file, ...data }) => {
    try {
        if (file) {
            const { imageUrl, public_id } = await uploadSingleToCloudinary(file, 'articles/featured');
            data.featuredImage = { imageUrl, public_id };
        }

        const article = await Article.create(data);
        if (!article) {
            throw createLocalizedError('errorCreatingArticle');
        }
        return article;
    } catch (error) {
        throw error;
    }
};

export const getAllArticles = async () => {
    try {
        return await Article.find()
            .populate('author', 'name email')
            .populate('approval.steps.user', 'name')
            .lean();
    } catch (error) {
        throw error;
    }
};
