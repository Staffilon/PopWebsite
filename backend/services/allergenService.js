const Allergen = require("../models/allergenModel");

// Get all allergens
const getAllAllergens = async () => {
    return await Allergen.find();
};

// Create allergen
const createAllergen = async (name) => {
    await handleDuplicateAllergen(name);

    try {
        return await Allergen.create({ name });
    } catch (error) {
        throw error;
    }
};

// Get allergen by ID
const getAllergenById = async (id) => {
    return await Allergen.findById(id);
};

const getAllergenByName = async (name) => {
    return await Allergen.findOne({ name });
};

// Update allergen
const updateAllergen = async (id, data) => {
    const { name } = data;

    if (name) {
        await handleDuplicateAllergen(name);
    }

    try {
        return await Allergen.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
        throw error;
    }
};

// Delete allergen
const deleteAllergen = async (id) => {
    return await Allergen.findByIdAndDelete(id);
};

const handleDuplicateAllergen = async (name) => {
    const existingAllergen = await Allergen.findOne({ name });

    if (existingAllergen) {
        const error = new Error("Allergen with the same name already exists");
        error.statusCode = 11000;
        throw error;
    }
};

module.exports = {
    getAllAllergens,
    createAllergen,
    getAllergenById,
    updateAllergen,
    deleteAllergen,
    getAllergenByName,
};
