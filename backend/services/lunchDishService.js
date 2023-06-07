const LunchDish = require("../models/lunchDishModel");

// Get all dishes
const getAllLunchDishes = async () => {
    return LunchDish.find();
};

// Create lunch dishes
const createLunchDishes = async (lunchDishes) => {
    try {
        // Delete all existing lunch dishes
        await LunchDish.deleteMany({});

        // Insert new lunch dishes from the array
        const createdDishes = await LunchDish.insertMany(lunchDishes);

        return createdDishes;
    } catch (error) {
        // Handle any errors that occurred during the deletion or insertion
        console.error("Error creating lunch dishes:", error);
        throw error;
    }
};

module.exports = {
    getAllLunchDishes,
    createLunchDishes,
};
