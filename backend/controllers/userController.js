const asyncHandler = require("express-async-handler");
const userService = require("../services/userService");

//@desc Login user
//@route POST /api/user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400);
        throw new Error("Devi inserire tutti campi!");
    }

    const user = await userService.getUserByUsername(username);

    if (user && (await userService.comparePasswords(password, user.password))) {
        const accessToken = userService.generateAccessToken(user);
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Username o password non sono validi!");
    }
});

module.exports = {
    loginUser,
};
