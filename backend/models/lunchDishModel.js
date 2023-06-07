const mongoose = require("mongoose");

const lunchDishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Per favore aggiungi il nome del piatto!"],
    },
    price: {
        type: Number,
        required: [true, "Per favore aggiungi il prezzo del piatto!"],
    },

    ingredients: [
        {
            type: String,
        },
    ],
    allergens: {
        type: Boolean,
        default: false,
    },
    refrigerated: {
        type: Boolean,
        default: false,
    },
});

const LunchDish = mongoose.model("lunchDish", lunchDishSchema);

module.exports = LunchDish;
