const Ingredient = require("../models/ingredientModel");
const {
    createAllergen,
    getAllergenByName,
} = require("../services/allergenService");

const Allergen = require("../models/allergenModel");

// Get all ingredients
const getAllIngredients = async () => {
    return await Ingredient.find().populate("allergens");
};

// Create ingredient
const createIngredient = async (name, allergens) => {
    await handleDuplicateIngredientName(name);
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

// Get ingredient by ID
const getIngredientByName = async (name) => {
    return await Ingredient.findOne({ name }).populate("allergens");
};

// Update ingredients
const updateIngredient = async (id, data) => {
    const { name, allergens } = data;

    const allergenIds = await handleDuplicateIngredientData(
        name,
        allergens,
        id
    );

    const updatedIngredient = await Ingredient.findByIdAndUpdate(
        id,
        { name, allergens: allergenIds },
        { new: true }
    ).populate("allergens");

    return updatedIngredient;
};

// Delete ingredient
const deleteIngredient = async (id) => {
    return await Ingredient.findByIdAndDelete(id);
};

const handleDuplicateIngredientName = async (name) => {
    const existingIngredient = await Ingredient.findOne({ name });

    if (existingIngredient) {
        const error = new Error("Ingrediente con lo stesso nome esiste già");
        error.statusCode = 11000;
        throw error;
    }
};

const handleDuplicateIngredientData = async (name, allergens, ingredientId) => {
    const allergenIds = await Promise.all(
        allergens.map(async (allergenName) => {
            let allergen = await getAllergenByName(allergenName);

            if (!allergen) {
                allergen = await createAllergen(allergenName);
            }

            return allergen._id;
        })
    );

    console.log(allergenIds);

    const existingIngredient = await Ingredient.findOne({
        name,
        _id: { $ne: ingredientId },
    });

    if (existingIngredient) {
        const error = new Error(
            "Ingrediente con lo stesso nome e allergeni esiste già"
        );
        error.statusCode = 11000;
        throw error;
    } else {
        return allergenIds;
    }
};

module.exports = {
    getAllIngredients,
    createIngredient,
    getIngredientById,
    updateIngredient,
    deleteIngredient,
    getIngredientByName,
};
