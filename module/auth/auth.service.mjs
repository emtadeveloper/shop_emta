import { createLocalizedError, } from "../../common/locale/localizationHelper.mjs"
import UserModel from '../user/user.model.mjs'
import RoleModel from '../role/role.model.mjs'

export const registerUser = async (userData) => {
    const { email, username } = userData;
        const exists = await UserModel.findOne({ $or: [{ email }, { username }] });

        // if (exists) {
        //     throw createLocalizedError("userAlreadyExists");
        // }

        const userCount = await UserModel.countDocuments();

        if (userCount === 0) {
            const roles = await RoleModel.findOne({ roleName: "admin" });
            const createUser = await UserModel.create({ ...userData, role: roles._id });
            return createUser.toObject();
        }

        const roles = await RoleModel.findOne({ roleName: "user" });
        const createUser = await UserModel.create({ ...userData, role: roles._id });
        return createUser.toObject();

};

export default { registerUser }
