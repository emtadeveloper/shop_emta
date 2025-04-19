import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import { hashPasswordBcrypt, comparePasswordBcrypt } from "../../common/util/password.mjs";
import { createLocalizedError } from "../../common/locale/localizationHelper.mjs";

const addressSchema = new mongoose.Schema({
    type: { type: String, enum: ["home", "work", "other"], default: "home" },
    postalCode: { type: String, required: true },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
    address: { type: String, required: true },
    cityId: { type: Number, required: true }
});

const userSchema = new mongoose.Schema({
    phone: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    googleId: { type: String, default: null },
    addresses: { type: [addressSchema] },
    role: {
        type: mongoose.Types.ObjectId,
        ref: "Role",
        autopopulate: true,
        autopopulate: { select: "-_id" }
    }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {
        transform(doc, ret) {
            delete ret.password;
            delete ret.googleId;
            return ret;
        }
    },
    toObject: {
        transform(doc, ret) {
            delete ret.password;
            delete ret.googleId;
            return ret;
        }
    }
});

userSchema.plugin(autopopulate);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        this.password = await hashPasswordBcrypt(this.password);
        next();
    } catch (err) {
        next(createLocalizedError("passwordWeak"));
    }
});

userSchema.post("save", function (error, doc, next) {
    if (error.code === 11000) {
        const field = Object.keys(error.keyValue)[0];
        switch (field) {
            case "phone": return next(createLocalizedError("phoneAlreadyExists"));
            case "email": return next(createLocalizedError("emailAlreadyExists"));
            case "username": return next(createLocalizedError("usernameAlreadyExists"));
        }
    }
    next(error);
});

userSchema.methods.comparePassword = function (candidatePassword) {
    return comparePasswordBcrypt(candidatePassword, this.password);
};

export default mongoose.model("User", userSchema);
