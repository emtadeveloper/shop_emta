/**
 * @param {Object} oldData
 * @param {Object} newData 
 * @param {string} prefix 
 * @returns {Object}
 */

export const createUpdateFields = (oldData, newData, prefix) => {
    const updatedFields = {};

    Object.keys(newData).forEach((key) => {
        if (newData[key] && newData[key] !== oldData[key]) {
            updatedFields[`${prefix}.${key}`] = newData[key];
        }
    });

    return updatedFields;
};
