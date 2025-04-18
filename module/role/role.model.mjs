import mongoose from "mongoose"

const roleSchema = new mongoose.Schema({
    roleName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    permissions: { type: [Number], default: [1, 2, 3] }
}, {
    timestamps: false,
    versionKey: false,
});

export default mongoose.model('Role', roleSchema);