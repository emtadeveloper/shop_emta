import slugify from 'slugify';
import ArticleModel from '../../module/article/article.model.mjs';

export const generateUniqueSlug = async (title) => {
    let baseSlug = slugify(title, { lower: true, strict: true });
    let uniqueSlug = baseSlug;
    let counter = 1;

    while (await ArticleModel.exists({ slug: uniqueSlug })) {
        uniqueSlug = `${baseSlug}-${counter++}`;
    }

    return uniqueSlug;
}
