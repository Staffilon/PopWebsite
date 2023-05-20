const mongoose = require("mongoose");

const allergenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Per favore aggiungi il nome dell'alergene!"],
    },
});

const Allergen = mongoose.model("Allergen", allergenSchema);

module.exports = Allergen;
