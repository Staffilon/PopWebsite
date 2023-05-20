const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Per favore inserisci lo username!"],
    },
    password: {
        type: String,
        required: [true, "Per favore inserisci la password"],
    },
});

module.exports = mongoose.model("User", userSchema);
