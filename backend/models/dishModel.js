const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
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
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ingredient",
        },
    ],
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
