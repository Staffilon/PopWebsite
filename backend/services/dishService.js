const Dish = require("../models/dishModel");
const {
    createIngredient,
    getAllergenByName,
    getIngredientByName,
    getIngredientById,
} = require("../services/ingredientService");

// Get all dishes
const getAllDishes = async () => {
    return await Dish.find().populate({
        path: "ingredients",
        populate: {
            path: "allergens",
            model: "Allergen",
        },
    });
};

// Create dish
const createDish = async (name, price, ingredients) => {
    await handleDuplicateDishName(name);
    const ingredientIds = [];

    if (ingredients && ingredients.length > 0) {
        for (const ingredient of ingredients) {
            let existingIngredient = await getIngredientByName(ingredient.name);

            if (!existingIngredient) {
                // Create a new ingredient if it doesn't exist
                existingIngredient = await createIngredient(
                    ingredient.name,
                    ingredient.allergens
                );
            }

            ingredientIds.push(existingIngredient._id);
        }
    }

    const dish = await Dish.create({
        name,
        price,
        ingredients: ingredientIds,
    });

    return dish;
};

// Get dish by ID
const getDishById = async (id) => {
    return await Dish.findById(id).populate({
        path: "ingredients",
        populate: {
            path: "allergens",
            model: "Allergen",
        },
    });
};

// Update dishes
const updateDish = async (id, data) => {
    const { name, price, ingredients } = data;

    const ingredientIds = await handleDuplicateDishData(
        name,
        price,
        ingredients,
        id
    );

    const updatedDish = await Dish.findByIdAndUpdate(
        id,
        { name, price, ingredients: ingredientIds },
        { new: true }
    );

    return updatedDish;
};

// Delete dish
const deleteDish = async (id) => {
    return await Dish.findByIdAndDelete(id);
};

//Checks for a duplicate dish
const handleDuplicateDishName = async (name) => {
    const existingDish = await Dish.findOne({ name });

    if (existingDish) {
        const error = new Error("Piatto con lo stesso nome esiste già");
        error.statusCode = 11000;
        throw error;
    }
};

const handleDuplicateDishData = async (name, price, ingredients, dishId) => {
    const ingredientIds = await Promise.all(
        ingredients.map(async (ingredientBody) => {
            let ingredient = await getIngredientByName(ingredientBody.name);

            if (!ingredient) {
                ingredient = await createIngredient(
                    ingredientBody.name,
                    ingredientBody.allergens
                );
            }

            return ingredient._id;
        })
    );

    const existingDish = await Dish.findOne({
        $or: [
            {
                name, // Check for a dish with the same name as the updated dish (Dish B)
                _id: { $ne: dishId }, // Exclude the current dish being updated
            },
            {
                name: { $ne: name }, // Exclude dishes with the same name as the updated dish
                price, // Check for a dish with the same price
                ingredients: {
                    $all: ingredientIds, // Check for exact match of ingredients (Dish B has exactly the same ingredients as Dish A)
                    $size: ingredientIds.length, // Check for the same number of ingredients
                },
            },
        ],
    });

    if (existingDish) {
        const error = new Error(
            "Piatto con lo stesso nome oppure stesso prezzo e ingredienti esiste già"
        );
        error.statusCode = 11000;
        throw error;
    } else {
        return ingredientIds;
    }
};

module.exports = {
    getAllDishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
};
