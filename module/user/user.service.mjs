import UserModel from "../profile/profile.model.mjs";
import RoleModel from "../role/role.model.mjs";

export const changeUserRoleService = async ({ targetUserId, newRoleId }) => {
    try {
        const newRole = await RoleModel.findById(newRoleId).lean();

        if (!newRole) {
            throw createLocalizedError('roleNotFound');
        }

        if (newRole.roleName.toLowerCase() === 'admin') {
            throw createLocalizedError('NotAccess');
        }

        const user = await UserModel.findById(targetUserId).lean();

        if (!user) {
            throw createLocalizedError('userNotFound');
        }

        const updatedUser = await UserModel.findByIdAndUpdate(
            targetUserId,
            { role: newRole._id },
            { new: true }
        )

        return updatedUser

    } catch (error) {
        throw error;
    }
};
