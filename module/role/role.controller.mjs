import { createLocalizedError, createLocalizedSuccess } from "../../common/locale/localizationHelper.mjs";
import RoleModel from "./role.model.mjs";
import RoleService from "./role.service.mjs";
import { createRoleValidationSchema } from "./role.validation.mjs";

export const createRoleController = async (req, res, next) => {
    try {

        await createRoleValidationSchema.validate(req.body)

        let { permissions, roleName } = req.body;

        roleName = roleName.toUpperCase();

        const exist = await RoleModel.findOne({ roleName });

        if (exist) {
            throw createLocalizedError("duplicateRoleName")
        }

        const result = await RoleService.createRole({ permissions, roleName });

        return createLocalizedSuccess(res, 'successRole', result);

    } catch (error) {
        next(error)
    }
}

export const getAllRoleController = async (req, res, next) => {
    try {
        const data = await RoleModel.find({});

        return createLocalizedSuccess(res, 'success', data);
    } catch (error) {
        next(error)
    }
}

export const getRoleByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const role = await RoleService.getRoleById(id);
        if (!role) throw createLocalizedError("roleNotFound");

        return createLocalizedSuccess(res, "success", role);
    } catch (error) {
        next(error);
    }
};

export const updateRoleByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        let { roleName, permissions } = req.body;

        roleName = roleName.toUpperCase();

        const updated = await RoleService.updateRoleById(id, { roleName, permissions });

        if (!updated) throw createLocalizedError("roleNotFound");

        return createLocalizedSuccess(res, "successUpdate", updated);
    } catch (error) {
        next(error);
    }
};

export const deleteRoleByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;

        await RoleService.deleteRoleById(id);

        return createLocalizedSuccess(res, "successDelete");
    } catch (error) {
        next(error);
    }
};

export default { createRoleController, getAllRoleController, getRoleByIdController, deleteRoleByIdController }