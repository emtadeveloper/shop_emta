import * as yup from 'yup';
import { messages } from '../../common/locale/local.mjs';

export const createCategoryValidation = yup.object({
    title: yup
        .string()
        .trim()
        .required(messages.titleRequired),

    slug: yup
        .string()
        .trim()
        .matches(/^[a-z0-9-]+$/, messages.invalidSlug)
        .required(messages.slugRequired),

    parent: yup
        .string()
        .nullable()
        .matches(/^[a-f\d]{24}$/i, messages.invalidObjectId)
        .notRequired(),

    description: yup
        .string()
        .trim()
        .notRequired(),

    filters: yup.array().of(
        yup.object({
            name: yup.string().required(messages.filterNameRequired),
            slug: yup.string().required(messages.filterSlugRequired),
            description: yup.string().notRequired(),
            type: yup.string().oneOf(['radio', 'selectbox'], messages.invalidFilterType).required(),
            options: yup.array().of(yup.string()).notRequired(),
            min: yup.number().notRequired(),
            max: yup.number().notRequired(),
        })
    ).notRequired()
});

export const updateCategoryValidation = yup.object({
    title: yup.string().trim().notRequired(),
    slug: yup.string().trim().matches(/^[a-z0-9-]+$/, messages.invalidSlug).notRequired(),
    parent: yup.string().nullable().matches(/^[a-f\d]{24}$/i, messages.invalidObjectId).notRequired(),
    description: yup.string().trim().notRequired(),
    filters: yup.array().of(
        yup.object({
            name: yup.string().notRequired(),
            slug: yup.string().notRequired(),
            description: yup.string().notRequired(),
            type: yup.string().oneOf(['radio', 'selectbox'], messages.invalidFilterType).notRequired(),
            options: yup.array().of(yup.string()).notRequired(),
            min: yup.number().notRequired(),
            max: yup.number().notRequired(),
        })
    ).notRequired()
}).noUnknown().test(
    'at-least-one',
    messages.updateAtLeastOne,
    (value) => value && Object.keys(value).length > 0
);
