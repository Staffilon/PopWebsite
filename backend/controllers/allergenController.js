const asyncHandler = require("express-async-handler");
const allergenService = require("../services/allergenService");

//@desc Get all allergens
//@route GET /api/allergens
//@access private
const getAllergens = asyncHandler(async (req, res) => {
    const allergens = await allergenService.getAllAllergens();
    res.status(200).json({ allergens });
});

//@desc Create allergen
//@route POST /api/allergens
//@access private
const createAllergen = async (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        res.status(400);
        throw new Error("Il nome dell'allergene è obbligatorio!");
    }

    try {
        const allergen = await allergenService.createAllergen(name);
        res.status(201).json(allergen);
    } catch (error) {
        if (error.statusCode === 11000) {
            res.status(409);
        }
        next(error);
    }
};

//@desc Get allergen
//@route GET /api/allergens/:id
//@access private
const getAllergen = asyncHandler(async (req, res) => {
    const allergen = await allergenService.getAllergenById(req.params.id);
    if (!allergen) {
        res.status(404);
        throw new Error("Allergene non trovato");
    }
    res.status(200).json(allergen);
});

//@desc Update allergen
//@route PUT /api/allergens/:id
//@access private
const updateAllergen = asyncHandler(async (req, res, next) => {
    const allergen = await allergenService.getAllergenById(req.params.id);
    if (!allergen) {
        res.status(404);
        throw new Error("Allergene non trovato");
    }
    try {
        const allergen = await allergenService.updateAllergen(
            req.params.id,
            req.body
        );
        res.status(200).json(allergen);
    } catch (error) {
        if (error.statusCode === 11000) {
            res.status(409);
        }
        next(error);
    }
});

//@desc Delete allergen
//@route DELETE /api/allergens/:id
//@access private
const deleteAllergen = asyncHandler(async (req, res) => {
    const allergen = await allergenService.getAllergenById(req.params.id);
    if (!allergen) {
        res.status(404);
        throw new Error("Allergene non trovato");
    }

    await allergenService.deleteAllergen(req.params.id);
    res.status(200).json(allergen);
});

module.exports = {
    getAllergens,
    getAllergen,
    createAllergen,
    updateAllergen,
    deleteAllergen,
};
