const mongoose = require("mongoose");

const allergenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Per favore aggiungi il nome dell'allergene!"],
    },
});

const Allergen = mongoose.model("Allergen", allergenSchema);

module.exports = Allergen;
