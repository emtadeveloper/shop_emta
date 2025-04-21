import ThemeService from "./theme.service.mjs";
import { createLocalizedSuccess } from "../../common/locale/localizationHelper.mjs";
import { updateThemeValidation } from "./theme.validator.mjs";

export const updateThemeController = async (req, res, next) => {
    try {

        await updateThemeValidation.validate(req.body);

        const updatedTheme = await ThemeService.updateTheme(req.user._id, req.body);

        return createLocalizedSuccess(res, "successUpdateTheme", updatedTheme);

    } catch (error) {
        next(error);
    }
};

export const deleteThemeController = async (req, res, next) => {
    try {
        const deleted = await ThemeService.deleteTheme(req.user._id);
        return createLocalizedSuccess(res, "successDeleteTheme", deleted);
    } catch (error) {
        next(error);
    }
};

export const getThemeController = async (req, res, next) => {
    try {
        const userId = req.user._id;

        const theme = await ThemeService.getTheme(userId);

        return createLocalizedSuccess(res, "successUpdateTheme", theme);

    } catch (error) {
        next(error);
    }
};