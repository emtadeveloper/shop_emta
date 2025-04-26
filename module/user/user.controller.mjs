import * as Service from "./user.service.mjs"
import UserModel from "../profile/profile.model.mjs"
import { createLocalizedSuccess, createLocalizedError } from "../../common/locale/localizationHelper.mjs"
import { userSearchQueryValidator, changeRoleBodySchema, changeRoleQueryValidator } from "./user.validator.mjs";
import { buildSearchFilter } from "../../common/util/buildSearchFilter.mjs";
import CONSTANT from "../../common/constant/index.mjs";

export const getAllController = async (req, res, next) => {
    try {

        const validatedQuery = await userSearchQueryValidator.validate(req.query, {
            abortEarly: false,
            stripUnknown: true,
        });

        const filter = buildSearchFilter(CONSTANT.ALLOWED_SEARCH_FIELDS, validatedQuery);

        const users = await UserModel.find(filter);

        console.log({ users });

        if (!users) {
            throw createLocalizedError("userNotFound")
        }

        console.log(users);
        return createLocalizedSuccess(res, 'success', users);

    } catch (error) {
        next(error);
    }
};

export const changeRoleUserController = async (req, res, next) => {
    try {

        const { roleName } = req?.user?.role

        if (roleName?.toUpperCase() !== "ADMIN") {
            throw createLocalizedError("NotAccess")
        }

        const { id: targetUserId } = await changeRoleQueryValidator.validate(req.params, {
            abortEarly: false,
            stripUnknown: true,
        });

        const { roleId: newRoleId } = await changeRoleBodySchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true,
        });

        const result = await Service.changeUserRoleService({
            targetUserId,
            newRoleId,
        });

        return createLocalizedSuccess(res, 'userRoleChanged', result);
    } catch (err) {
        next(err);
    }
}