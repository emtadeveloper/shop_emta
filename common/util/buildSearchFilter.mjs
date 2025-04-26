export const buildSearchFilter = (fields, query) => {
    if (fields) {
        return fields.reduce((acc, field) => {
            if (query[field]) {
                acc[field] = { $regex: query[field], $options: 'i' };
            }
            return acc;
        }, {});
    }
};