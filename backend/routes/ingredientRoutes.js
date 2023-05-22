const express = require("express");
const router = express.Router();

const {
    getIngredients,
    getIngredient,
    createIngredient,
    updateIngredient,
    deleteIngredient,
} = require("../controllers/ingredientController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getIngredients).post(createIngredient);
router
    .route("/:id")
    .get(getIngredient)
    .put(updateIngredient)
    .delete(deleteIngredient);

module.exports = router;
