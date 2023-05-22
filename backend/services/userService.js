const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Get user by username
const getUserByUsername = async (username) => {
    return await User.findOne({ username });
};

// Compare passwords
const comparePasswords = async (password, hashedPassword) => {
    return await bcrypt.compare(password.toString(), hashedPassword);
};

// Generate access token
const generateAccessToken = (user) => {
    return jwt.sign(
        {
            user: {
                username: user.username,
                id: user.id,
            },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "150m" }
    );
};

module.exports = {
    getUserByUsername,
    comparePasswords,
    generateAccessToken,
};
