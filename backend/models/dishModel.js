const mongoose = require("mongoose");

const dishSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the dish name"],
    },
    price: {
        type: Number,
        required: [true, "Please add the price of the dish"],
    },
    ingredients: [
        {
            name: {
                type: String,
                required: [true, "Please add the name of the ingredient"],
            },
            allergens: [
                {
                    type: String,
                    required: [true, "Please add the name of the allergen"],
                },
            ],
        },
    ],
});
