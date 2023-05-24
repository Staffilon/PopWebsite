const asyncHandler = require("express-async-handler");
const ingredientService = require("../services/ingredientService");

//@desc Get all ingredients
//@route GET /api/ingredients
//@access private
const getIngredients = asyncHandler(async (req, res) => {
    const ingredients = await ingredientService.getAllIngredients();
    res.status(200).json({ ingredients });
});

//@desc Create ingredient
//@route POST /api/ingredients
//@access private
const createIngredient = asyncHandler(async (req, res, next) => {
    console.log("The request body is:", req.body);
    const { name, allergens } = req.body;
    if (!name) {
        res.status(400);
        throw new Error("Il nome dell'ingredient è obbligatorio!");
    }

    try {
        const ingredient = await ingredientService.createIngredient(
            name,
            allergens
        );
        res.status(201).json(ingredient);
    } catch (error) {
        if (error.statusCode === 11000) {
            res.status(409);
        }
        next(error);
    }
});

//@desc Get ingredient
//@route GET /api/ingredients/:id
//@access private
const getIngredient = asyncHandler(async (req, res) => {
    const ingredient = await ingredientService.getIngredientById(req.params.id);
    if (!ingredient) {
        res.status(404);
        throw new Error("Ingrediente non trovato");
    }
    res.status(200).json(ingredient);
});

//@desc Update ingredient
//@route PUT /api/ingredients/:id
//@access private
const updateIngredient = asyncHandler(async (req, res, next) => {
    const ingredient = await ingredientService.getIngredientById(req.params.id);
    if (!ingredient) {
        res.status(404);
        throw new Error("Ingrediente non trovato");
    }
    try {
        const updatedIngredient = await ingredientService.updateIngredient(
            req.params.id,
            req.body
        );
        res.status(200).json(updatedIngredient);
    } catch (error) {
        if (error.statusCode === 11000) {
            res.status(409);
        }
        next(error);
    }
});

//@desc Delete ingredient
//@route DELETE /api/ingredients/:id
//@access private
const deleteIngredient = asyncHandler(async (req, res) => {
    const ingredient = await ingredientService.getIngredientById(req.params.id);
    if (!ingredient) {
        res.status(404);
        throw new Error("Ingrediente non trovato");
    }

    await ingredientService.deleteIngredient(req.params.id);
    res.status(200).json(ingredient);
});

module.exports = {
    getIngredients,
    getIngredient,
    createIngredient,
    updateIngredient,
    deleteIngredient,
};
