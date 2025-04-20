import * as yup from "yup";
import { messages } from '../../common/locale/local.mjs';

export const createAddressValidation = yup.object({
    type: yup
        .string()
        .oneOf(["home", "work", "other"], messages.invalidAddressType)
        .required(messages.typeAddressRequired),

    postalCode: yup
        .string()
        .matches(/^\d{10}$/, messages.postalCodeInvalidLength)
        .required(messages.postalCodeRequired),

    address: yup
        .string()
        .min(5, messages.addressTooShort)
        .required(messages.addressRequired),

    cityId: yup
        .number()
        .typeError(messages.invalidCityId)
        .required(messages.cityIdRequired),

    location: yup.object({
        lat: yup
            .number()
            .typeError(messages.invalidLatitude)
            .required(messages.locationLatRequired),

        lng: yup
            .number()
            .typeError(messages.invalidLongitude)
            .required(messages.locationLngRequired),
    })
});

export const updateAddressValidation = yup.object({
    type: yup
        .string()
        .oneOf(["home", "work", "other"], messages.invalidAddressType)
        .notRequired(),

    postalCode: yup
        .string()
        .matches(/^\d{10}$/, messages.postalCodeInvalidLength)
        .notRequired(),

    address: yup
        .string()
        .min(5, messages.addressTooShort)
        .notRequired(),

    cityId: yup
        .number()
        .typeError(messages.invalidCityId)
        .notRequired(),

    location: yup.object({
        lat: yup
            .number()
            .typeError(messages.invalidLatitude)
            .notRequired(),

        lng: yup
            .number()
            .typeError(messages.invalidLongitude)
            .notRequired(),
    }).notRequired()
});

export const updateProfileValidationSchema = yup.object({
    firstName: yup
        .string()
        .trim(),

    lastName: yup
        .string()
        .trim(),

    phone: yup
        .string()
        .trim()
        .matches(/^09\d{9}$/, messages.invalidPhone),

    email: yup
        .string()
        .trim()
        .lowercase()
        .email(messages.invalidEmail),

    username: yup
        .string()
        .trim()
        .min(3, messages.usernameMinLength),
}).noUnknown().test(
    'at-least-one',
    messages.updateAtLeastOne,
    value => value && Object.keys(value).length > 0
);

export const updatePasswordValidationSchema = yup.object({
    currentPassword: yup
        .string()
        .required(messages.currentPasswordRequired)
        .min(6, messages.passwordMinLength),

    newPassword: yup
        .string()
        .required(messages.newPasswordRequired)
        .min(6, messages.passwordMinLength),

    confirmNewPassword: yup
        .string()
        .required(messages.confirmPasswordRequired)
        .oneOf([yup.ref('newPassword')], messages.passwordsMustMatch),
}).noUnknown();
