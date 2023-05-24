const asyncHandler = require("express-async-handler");
const dishService = require("../services/dishService");

//@desc Get all dishes
//@route GET /api/dishes
//@access private
const getDishes = asyncHandler(async (req, res) => {
    const dishes = await dishService.getAllDishes();
    res.status(200).json({ dishes });
});

//@desc Create dish
//@route POST /api/dishes
//@access private
const createDish = asyncHandler(async (req, res, next) => {
    console.log("The request body is:", req.body);
    const { name, price, ingredients } = req.body;
    if (!name || !price || !ingredients) {
        res.status(400);
        throw new Error("I dati del piatto sono obbligatori!");
    }

    try {
        const dish = await dishService.createDish(name, price, ingredients);
        res.status(201).json(dish);
    } catch (error) {
        if (error.statusCode === 11000) {
            res.status(409);
        }
        next(error);
    }
});

//@desc Get dish
//@route GET /api/dishes/:id
//@access private
const getDish = asyncHandler(async (req, res) => {
    const dish = await dishService.getDishById(req.params.id);
    if (!dish) {
        res.status(404);
        throw new Error("Piatto non trovato");
    }
    res.status(200).json(dish);
});

//@desc Update dish
//@route PUT /api/dishes/:id
//@access private
const updateDish = asyncHandler(async (req, res, next) => {
    const dish = await dishService.getDishById(req.params.id);
    if (!dish) {
        res.status(404);
        throw new Error("Piatto non trovato");
    }
    try {
        const updatedDish = await dishService.updateDish(
            req.params.id,
            req.body
        );
        res.status(200).json(updatedDish);
    } catch (error) {
        if (error.statusCode === 11000) {
            res.status(409);
        }
        next(error);
    }
});

//@desc Delete dish
//@route DELETE /api/dishes/:id
//@access private
const deleteDish = asyncHandler(async (req, res) => {
    const dish = await dishService.getDishById(req.params.id);
    if (!dish) {
        res.status(404);
        throw new Error("Piatto non trovato");
    }

    await dishService.deleteDish(req.params.id);
    res.status(200).json(dish);
});

module.exports = {
    getDishes,
    getDish,
    createDish,
    updateDish,
    deleteDish,
};
