const Dish = require("../models/dishModel");

// Get all dishes
const getAllDishes = async () => {
    return await Dish.find();
};

// Create dish
const createDish = async (dishbody) => {
    const { type, name, price, ingredients, allergens, refrigerated } =
        dishbody;
    await handleDuplicateDishName(name);

    const dish = await Dish.create({
        type,
        name,
        price,
        ingredients,
        allergens,
        refrigerated,
    });

    return dish;
};

// Get dish by ID
const getDishById = async (id) => {
    return await Dish.findById(id);
};

// Update dishes
const updateDish = async (id, data) => {
    const { type, name, price, ingredients, allergens, refrigerated } = data;

    await handleDuplicateDishData(type, name, id);

    const updatedDish = await Dish.findByIdAndUpdate(
        id,
        { type, name, price, ingredients, allergens, refrigerated },
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

const handleDuplicateDishData = async (type, name, dishId) => {
    const existingDish = await Dish.findOne({
        _id: { $ne: dishId }, // Exclude the current dish being updated
        type,
        name,
    });

    if (existingDish) {
        const error = new Error("Piatto con lo stesso nome e tipo esiste già");
        error.statusCode = 11000;
        throw error;
    }
};

module.exports = {
    getAllDishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
};
