// theme.service.mjs

import ThemeModel from "./theme.model.mjs";
import { createLocalizedError } from "../../common/locale/localizationHelper.mjs";

export const updateTheme = async (userId, newThemeData) => {
    try {
        const updated = await ThemeModel.findOneAndUpdate(
            { userId },
            { ...newThemeData, user: userId },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );
        return updated;
    } catch (error) {
        throw error
    }
};

export const deleteTheme = async (userId) => {
    try {
        const deleted = await ThemeModel.findOneAndDelete({ userId });

        if (!deleted) {
            throw createLocalizedError("themeNotFound");
        }

        return deleted;
    } catch (error) {
        throw error
    }
};

export const getTheme = async (userId) => {
    const theme = await ThemeModel.findOne({ userId });

    if (!theme) {
        throw createLocalizedError("themeNotFound");
    }

    return theme;
};

export default { updateTheme, deleteTheme, getTheme };
