const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: [
            "Colazione",
            "Pranzo",
            "Piadine",
            "Aperitivo",
            "Bevande",
            "Brunch",
        ],
        required: [true, "Per favore aggiungi il tipo del piatto!"],
    },
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

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
