// Insert user script
const User = require("./models/userModel");
const bcrypt = require("bcrypt");

async function insertUser() {
    const username = "your_username";
    const password = "your_password";

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await User.create({
            username,
            password: hashedPassword,
        });

        console.log("User inserted:", user);
    } catch (error) {
        console.error("Error inserting user:", error);
    }
}

insertUser();
