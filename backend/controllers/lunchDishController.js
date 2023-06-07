const asyncHandler = require("express-async-handler");
const lunchDishService = require("../services/lunchDishService");

//@desc Get all lunch dishes
//@route GET /api/dishes
//@access public
const getLunchDishes = asyncHandler(async (req, res) => {
    const lunchDishes = await lunchDishService.getAllLunchDishes();
    res.status(200).json(lunchDishes);
});

//@desc Create all selected dishes
//@route POST /api/dishes
//@access private
const createLunchDishes = asyncHandler(async (req, res) => {
    const { lunchDishes } = req.body;

    if (
        !lunchDishes ||
        !Array.isArray(lunchDishes) ||
        lunchDishes.length === 0
    ) {
        res.status(400);
        throw new Error("Non tutti i piatti sono validi!");
    }

    const emptyDishIndex = lunchDishes.findIndex(
        (dish) => !dish.name || !dish.price || !dish.ingredients
    );

    if (emptyDishIndex !== -1) {
        res.status(400);
        throw new Error(`Il piatto ${emptyDishIndex + 1} è incompleto!`);
    }

    const createdDishes = await lunchDishService.createLunchDishes(lunchDishes);
    res.status(201).json(createdDishes);
});

module.exports = {
    getLunchDishes,
    createLunchDishes,
};
