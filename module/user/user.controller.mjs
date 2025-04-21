import mongoose from "mongoose";
import { createLocalizedError, createLocalizedSuccess } from "../../common/locale/localizationHelper.mjs";
import userService from "./user.service.mjs";
import {
    createAddressValidation,
    updateAddressValidation,
    updateProfileValidationSchema
} from "./user.validator.mjs";

export const createAddressController = async (req, res, next) => {
    try {

        await createAddressValidation.validate(req.body)

        const data = await userService.createAddress(req.body, req.user._id);

        return createLocalizedSuccess(res, 'successCreateAddress', data);

    } catch (error) {
        next(next)
    }
};

export const updateAddressController = async (req, res, next) => {
    try {

        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw createLocalizedError("invalidUserId");
        }

        await updateAddressValidation.validate(req.body)

        const data = await userService.updateAddress(req.user._id, id, req.body);


        return createLocalizedSuccess(res, 'successUpdateAddress', data);

    } catch (error) {
        next(next)
    }
};

export const deleteAddressController = async (req, res, next) => {
    try {

        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw createLocalizedError("invalidUserId");
        }

        await userService.deleteAddress(req.user._id, id);

        return createLocalizedSuccess(res, 'successDeleteAddress');

    } catch (error) {
        next(next)
    }
}

export const getAddressController = async (req, res, next) => {
    try {

        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw createLocalizedError("invalidUserId");
        }

        const data = await userService.getAddress(req.user._id, id)

        return createLocalizedSuccess(res, 'success', data);

    } catch (error) {
        next(error)
    }
}

export const getAllAddressController = async (req, res, next) => {
    try {

        const data = await userService.getAllAddress(req.user._id)

        return createLocalizedSuccess(res, 'success', data);

    } catch (error) {
        next(error)
    }
}

export const updateUserController = async (req, res, next) => {
    try {

        const newData = req.body
        const oldData = req.user

        await updateProfileValidationSchema.validate(newData)

        const { _id, ...data } = await userService.updateUser(oldData, newData);

        return createLocalizedSuccess(res, 'successUpdateProfile', data);

    } catch (error) {
        next(error)
    }
}

export const setUserAvatarController = async (req, res, next) => {
    try {

        if (!req.file) {
            throw createLocalizedError("avatarRequired");
        }

        const { file, user } = req;
        const data = await userService.setUserAvatar(user, file);

        return createLocalizedSuccess(res, "successSetAvatar", data);

    } catch (err) {
        next(err);
    }
};

export const deleteUserAvatarController = async (req, res, next) => {
    try {
        const avatar = await userService.deleteUserAvatar(req.user);
        return createLocalizedSuccess(res, "successDeleteAvatar", avatar);
    } catch (err) {
        next(err);
    }
};

export const getUserAvatarController = async (req, res, next) => {
    try {
        const avatar = await userService.getUserAvatar(req.user);
        return createLocalizedSuccess(res, "successGetAvatar", avatar);
    } catch (err) {
        next(err);
    }
};