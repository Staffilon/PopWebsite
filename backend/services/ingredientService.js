const Ingredient = require("../models/ingredientModel");
const {
    createAllergen,
    getAllergenByName,
} = require("../services/allergenService");

// Get all ingredients
const getAllIngredients = async () => {
    return await Ingredient.find().populate("allergens");
};

// Create ingredient
const createIngredient = async (name, allergens) => {
    await handleDuplicateIngredient(name);
    const allergenIds = [];

    if (allergens && allergens.length > 0) {
        for (const allergenName of allergens) {
            let allergen = await getAllergenByName(allergenName);

            if (!allergen) {
                // Create a new allergen if it doesn't exist
                allergen = await createAllergen(allergenName);
            }

            allergenIds.push(allergen._id);
        }
    }

    const ingredient = await Ingredient.create({
        name,
        allergens: allergenIds,
    });

    return ingredient;
};

// Get ingredient by ID
const getIngredientById = async (id) => {
    return await Ingredient.findById(id).populate("allergens");
};

// Update ingredients
const updateIngredient = async (id, data) => {
    const { name, allergens } = data;

    await handleDuplicateIngredient(name);
    const allergenIds = [];

    if (allergens && allergens.length > 0) {
        for (const allergenName of allergens) {
            let allergen = await getAllergenByName(allergenName);

            if (!allergen) {
                // Create a new allergen if it doesn't exist
                allergen = await createAllergen(allergenName);
            }

            allergenIds.push(allergen._id);
        }
    }

    const updatedIngredient = await Ingredient.findByIdAndUpdate(
        id,
        { name, allergens: allergenIds },
        { new: true }
    );

    return updatedIngredient;
};

// Delete ingredient
const deleteIngredient = async (id) => {
    return await Ingredient.findByIdAndDelete(id);
};

const handleDuplicateIngredient = async (name) => {
    const existingIngredient = await Ingredient.findOne({ name });

    if (existingIngredient) {
        const error = new Error("Ingredient con lo stesso nome esiste già");
        error.statusCode = 11000;
        throw error;
    }
};

module.exports = {
    getAllIngredients,
    createIngredient,
    getIngredientById,
    updateIngredient,
    deleteIngredient,
};
