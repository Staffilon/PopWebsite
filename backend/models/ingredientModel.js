const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Per favore aggiungi il nome dell'ingrediente!"],
    },
    allergens: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Allergen",
        },
    ],
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;
