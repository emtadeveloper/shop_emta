const mongoose = require("mongoose");

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

    } catch (error) {
        console.error("Database connection or role creation failed:", error);
        process.exit(1);
    }
};

module.exports = connectionDB;
