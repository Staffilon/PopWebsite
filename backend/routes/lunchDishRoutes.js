const express = require("express");
const router = express.Router();

const {
    getLunchDishes,
    createLunchDishes,
} = require("../controllers/lunchDishController");
const validateToken = require("../middleware/validateTokenHandler");

router.route("/").get(getLunchDishes).post(validateToken, createLunchDishes);

module.exports = router;
