import mongoose from "mongoose";
import { createLocalizedError, createLocalizedSuccess } from "../../common/locale/localizationHelper.mjs";
import service from "./user.service.mjs";
import { createAddressValidation, updateAddressValidation } from "./user.validator.mjs";

export const createAddressController = async (req, res, next) => {
    try {

        await createAddressValidation.validate(req.body)

        const data = await service.createAddress(req.body, req.user._id);

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

        const data = await service.updateAddress(req.user._id, id, req.body);


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

        await service.deleteAddress(req.user._id, id);

        return createLocalizedSuccess(res, 'successDeleteAddress');

    } catch (error) {
        next(next)
    }
}
