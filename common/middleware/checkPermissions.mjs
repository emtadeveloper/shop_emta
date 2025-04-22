import { createLocalizedError } from "../locale/localizationHelper.mjs";

const requirePermissions = (requiredPermissions = []) => {
    return (req, res, next) => {
        try {
            const { permissions = [] } = req.user.role
            const hasAccessPermissions = requiredPermissions.some((role) => {
                return permissions.includes(role);
            })

            if (!hasAccessPermissions) {
                throw createLocalizedError("NotAccess");
            }

            next();
        } catch (error) {
            next(error)
        }
    };
};

export default requirePermissions;
