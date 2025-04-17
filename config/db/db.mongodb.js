const mongoose = require("mongoose");
const RoleModel = require("../../module/role/role.model");
const { Role, permissions } = require("../../common/constant");

console.log(RoleModel);

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        const roleCount = await RoleModel.countDocuments();

        if (roleCount === 0) {
            await RoleModel.create({
                roleName: Role[0],
                permissions: permissions
            });

            await RoleModel.create({
                roleName: Role[1]
            });
        }

    } catch (error) {
        console.error("Database connection or role creation failed:", error);
        process.exit(1);
    }
};

module.exports = connectionDB;
