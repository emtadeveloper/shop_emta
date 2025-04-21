import * as yup from "yup";

export const updateThemeValidation = yup.object({
    mode: yup.string().oneOf(["light", "dark"]),
    primaryColor: yup.string().matches(/^#([0-9A-Fa-f]{3}){1,2}$/, "invalidColor"),
    secondaryColor: yup.string().matches(/^#([0-9A-Fa-f]{3}){1,2}$/, "invalidColor"),
});
