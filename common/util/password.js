const bcrypt = require("bcrypt");

exports.comparePasswordBcrypt = comparePasswordBcrypt = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
}

exports.hashPasswordBcrypt = hashPasswordBcrypt = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}