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
