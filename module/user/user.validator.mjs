import * as yup from 'yup';
import { messages } from '../../common/locale/local.mjs';

export const userSearchQueryValidator = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .min(2, messages.firstNameTooShort)
        .max(50, messages.firstNameTooLong)
        .optional(),

    lastName: yup
        .string()
        .trim()
        .min(2, messages.lastNameTooShort)
        .max(50, messages.lastNameTooLong)
        .optional(),

    phone: yup
        .string()
        .trim()
        .matches(/^(\+98|0)?9\d{9}$/, messages.invalidPhone)
        .optional(),

    email: yup
        .string()
        .trim()
        .email(messages.invalidEmail)
        .optional()
});

export const changeRoleQueryValidator = yup
    .object({ id: yup.string().required('User ID is required') })
    .required();

export const changeRoleBodySchema = yup
    .object({
        roleId: yup.string().required('roleId is required'),
    })
    .required();

