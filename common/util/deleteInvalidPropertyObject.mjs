export const deleteInvalidPropertyObject = (data = {}, blackListFields = []) => {
    let nullishData = ["", " ", "0", 0, null, undefined];
    Object.keys(data).forEach(key => {
        if (blackListFields.includes(key)) {
            delete data[key];
            return;
        }

        if (typeof data[key] === "string") {
            data[key] = data[key].trim();
        }

        if (Array.isArray(data[key])) {
            if (data[key].length === 0) {
                delete data[key];
                return;
            }
            data[key] = data[key].map(item =>
                typeof item === "string" ? item.trim() : item
            );
        }

        if (nullishData.includes(data[key])) {
            delete data[key];
        }
    });

    return data;
};
