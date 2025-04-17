const { createLocalizedError } = require("../../common/locale/localizationHelper");
const UserModel = require('../user/user.model');
const RoleModel = require('../role/role.model');

exports.registerUser = async (userData) => {
    const { email, username } = userData;

    try {
        const exists = await UserModel.findOne({ $or: [{ email }, { username }] });
        if (exists) {
            throw createLocalizedError("userAlreadyExists");
        }

        const userCount = await UserModel.countDocuments();

        if (userCount === 0) {
            const roles = await RoleModel.findOne({ roleName: "admin" });
            const createUser = await UserModel.create({ ...userData, role: roles._id });
            return createUser.toObject();
        }

        const roles = await RoleModel.findOne({ roleName: "user" });
        const createUser = await UserModel.create({ ...userData, role: roles._id });
        return createUser.toObject();
    } catch (error) {
        next(error)
    }
};
