const Allergen = require("../models/allergenModel");

// Get all allergens
const getAllAllergens = async () => {
    return await Allergen.find();
};

// Create allergen
const createAllergen = async (name) => {
    return await Allergen.create({ name });
};

// Get allergen by ID
const getAllergenById = async (id) => {
    return await Allergen.findById(id);
};

// Update allergen
const updateAllergen = async (id, data) => {
    return await Allergen.findByIdAndUpdate(id, data, { new: true });
};

// Delete allergen
const deleteAllergen = async (id) => {
    return await Allergen.findByIdAndDelete(id);
};

module.exports = {
    getAllAllergens,
    createAllergen,
    getAllergenById,
    updateAllergen,
    deleteAllergen,
};
