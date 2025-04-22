import * as yup from 'yup';
import { messages } from '../../common/locale/local.mjs';

export const createRoleValidationSchema = yup.object({
    roleName: yup
        .string()
        .required(messages.roleNameRequired)
        .min(3, messages.roleNameMinLength)
        .max(50, messages.roleNameMaxLength),

    permissions: yup
        .array()
        .of(yup.number().positive(messages.permissionsPositive))
        .required(messages.permissionsRequired)
        .min(1, messages.permissionsMinLength)
        .max(10, messages.permissionsMaxLength),
}).noUnknown();