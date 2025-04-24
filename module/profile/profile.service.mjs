import { createLocalizedError } from "../../common/locale/localizationHelper.mjs";
import { createUpdateFields } from "../../common/util/updatedFields.mjs"
import { uploadSingleToCloudinary } from "../../common/util/multer.mjs"
import cloudinary from "../../config/cloudinary.mjs";

import UserModel from "./profile.model.mjs"

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
            }
        );

        if (!updateResult) {
            throw createLocalizedError("userNotFound");
        }

        return updateResult.toObject()
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

export const getAddress = async (userId, addressId) => {
    try {
        const result = await UserModel.findOne(
            { _id: userId, "addresses._id": addressId },
            { "addresses.$": 1 }
        );
        if (!result || !result.addresses.length) {
            throw createLocalizedError("addressNotFound");
        }
        return result.addresses[0].toObject();
    } catch (error) {
        throw error;
    }
};

export const getAllAddress = async (userId) => {
    try {
        const user = await UserModel.findById(userId, { addresses: 1 });

        if (!user) throw createLocalizedError("userNotFound");

        return user.addresses
    } catch (error) {
        throw error;
    }
};

export const updateUser = async (oldData, newData) => {
    try {
        const updatedFields = createUpdateFields(oldData.toObject(), newData);
        if (Object.keys(updatedFields).length === 0) {
            throw createLocalizedError("invalidUpdateData");
        }

        const updatedUser = await UserModel.findByIdAndUpdate(
            oldData._id,
            { $set: updatedFields },
            {
                new: true,
                runValidators: true,
                projection: { password: 0 }
            }
        );

        if (!updatedUser) {
            throw createLocalizedError("profileUpdateError");
        }

        return updatedUser.toObject();
    } catch (error) {
        throw error;
    }
};


export const setUserAvatar = async (user, file) => {

    if (user.avatar?.public_id) {
        await cloudinary.uploader.destroy(user.avatar.public_id);
    }

    const { imageUrl, public_id } = await uploadSingleToCloudinary(file, "avatars");

    const updatedUser = await UserModel.findOneAndUpdate(
        { _id: user._id },
        { $set: { avatar: { imageUrl, public_id } } },
        {
            new: true,
            projection: { _id: 1, firstName: 1, lastName: 1, avatar: 1 }
        }
    );

    if (!updatedUser) {
        throw createLocalizedError("userNotFound");
    }

    return {
        _id: updatedUser._id,
        name: `${updatedUser.firstName} ${updatedUser.lastName}`,
        avatar: updatedUser.avatar
    };
};

export const deleteUserAvatar = async (user) => {
    if (!user.avatar?.public_id) {
        throw createLocalizedError("avatarNotFound");
    }
    try {
        await cloudinary.uploader.destroy(user.avatar.public_id);
    } catch (err) {
        console.error("Cloudinary destroy error:", err.message);
    }
    const updated = await UserModel.findByIdAndUpdate(
        user._id,
        { $set: { avatar: null } },
        { new: true, projection: { avatar: 1 } }
    );
    return updated.avatar;
};

export const getUserAvatar = async (user) => {
    const found = await UserModel.findById(user._id, "avatar");
    if (!found || !found.avatar) {
        throw createLocalizedError("avatarNotFound");
    }
    return found.avatar;
};

export default { createAddress, updateAddress, deleteAddress, updateUser, getAddress, getAllAddress, setUserAvatar, deleteUserAvatar, getUserAvatar }