import { createLocalizedError } from "../../common/locale/localizationHelper.mjs";
import constant from '../../common/constant/index.mjs'
import RoleModel from "./role.model.mjs";

export const createRole = async ({ permissions, roleName }) => {
    try {
        return await RoleModel.create({ roleName, permissions })
    } catch (error) {
        throw error;
    }
};

export const getRoleById = async (id) => {
    try {
        return await RoleModel.findById(id);
    } catch (error) {
        throw error;
    }
};

export const updateRoleById = async (id, updateData) => {

    const admin = await RoleModel.findById(id);

    if (admin.roleName === constant.ROLES.ADMIN) {
        throw createLocalizedError("NotAccessUpdated");
    }

    const role = await RoleModel.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
    });

    if (!role) {
        throw createLocalizedError("roleNotFound");
    }

    return role;
};

export const deleteRoleById = async (id) => {

    const admin = await RoleModel.findById(id);

    if (admin.roleName === constant.ROLES.ADMIN) {
        throw createLocalizedError("NotAccessDeleted");
    }

    const deletedRole = await RoleModel.findByIdAndDelete(id);

    if (!deletedRole) {
        throw createLocalizedError("roleNotFound");
    }

    return deletedRole;
};

export default {
    createRole,
    getRoleById,
    updateRoleById,
    deleteRoleById
};
