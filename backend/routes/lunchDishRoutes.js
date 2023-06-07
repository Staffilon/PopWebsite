const express = require("express");
const router = express.Router();

const {
    getLunchDishes,
    createLunchDishes,
} = require("../controllers/lunchDishController");
const validateToken = require("../middleware/validateTokenHandler");

//router.use(validateToken);
router.route("/").get(getLunchDishes).post(createLunchDishes);

module.exports = router;
