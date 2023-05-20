const express = require("express");
const router = express.Router();
const {
    getAllergens,
    getAllergen,
    createAllergen,
    updateAllergen,
    deleteAllergen,
} = require("../controllers/allergenController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getAllergens).post(createAllergen);
router
    .route("/:id")
    .get(getAllergen)
    .put(updateAllergen)
    .delete(deleteAllergen);

module.exports = router;
