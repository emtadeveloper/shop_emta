import { createLocalizedError } from "../../common/locale/localizationHelper.mjs";
import { createUpdateFields } from "../../common/util/updatedFields.mjs"
import UserModel from "./user.model.mjs"

export const createAddress = async (addressData, userId) => {
    try {
        const updateResult = await UserModel.findByIdAndUpdate(
            userId,
            {
                $push: {
                    addresses: addressData
                }
            },
            {
                new: true,
                runValidators: true,
                projection: { addresses: 1 }
            }
        );

        if (!updateResult) {
            throw createLocalizedError("userNotFound");
        }

        return updateResult
    } catch (error) {
        throw error
    }
};

export const updateAddress = async (userId, addressId, addressData) => {
    try {
        const user = await UserModel.findOne({
            _id: userId,
            "addresses._id": addressId,
        });

        if (!user) {
            throw createLocalizedError("userNotFound");
        }

        const addressIndex = user.addresses.findIndex(
            (address) => address._id.toString() === addressId
        );

        const existingAddress = user.addresses[addressIndex];

        const updatedFields = createUpdateFields(existingAddress, addressData, "addresses.$");

        if (Object.keys(updatedFields).length === 0) {
            throw createLocalizedErrorr("noChangesDetected");
        }

        const updateResult = await UserModel.findOneAndUpdate(
            {
                _id: userId,
                "addresses._id": addressId,
            },
            {
                $set: updatedFields,
            },
            {
                new: true,
                runValidators: true,
                projection: { addresses: 1 },
            }
        );

        if (!updateResult) {
            throw createLocalizedError("addressNotFound");
        }

        return updateResult.addresses
    } catch (error) {
        throw error
    }
};

export const deleteAddress = async (userId, addressId) => {
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            throw createLocalizedError("userNotFound");
        }

        await UserModel.findOneAndUpdate(
            { _id: userId },
            { $pull: { addresses: { _id: addressId } } },
            { new: true, projection: { addresses: 1 } }
        );
        return true;
    } catch (error) {
        throw error
    }
};

export default { createAddress, updateAddress, deleteAddress }