import mongoose from "mongoose";
import RoleModel from "../../module/role/role.model.mjs";
import constants from "../../common/constant/index.mjs";

const { ROLES, PERMISSIONS } = constants;

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        const roleCount = await RoleModel.countDocuments();

        if (roleCount === 0) {

            await RoleModel.create({
                roleName: ROLES.USER,
                permissions: PERMISSIONS.USER
            });

            await RoleModel.create({
                roleName: ROLES.ADMIN,
                permissions: PERMISSIONS.ADMIN
            });
        }

    } catch (error) {
        console.error("Database connection or role creation failed:", error);
        process.exit(1);
    }
};

export default connectionDB;