export const parseJsonFields = (body) => {
    const parsedBody = { ...body };

    for (const key in parsedBody) {
        const value = parsedBody[key];

        if (
            typeof value === 'string' &&
            (value.startsWith('{') || value.startsWith('['))
        ) {
            try {
                parsedBody[key] = JSON.parse(value);
            } catch (err) {
            }
        }
    }

    return parsedBody;
}