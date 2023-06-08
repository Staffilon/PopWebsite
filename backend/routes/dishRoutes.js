const express = require("express");
const router = express.Router();

const {
    getDishes,
    getDish,
    createDish,
    updateDish,
    deleteDish,
} = require("../controllers/dishController");
const validateToken = require("../middleware/validateTokenHandler");

router.get("/", getDishes); // No validateToken middleware applied here
router.post("/", validateToken, createDish); // validateToken middleware applied only for POST route
router.get("/:id", validateToken, getDish); // validateToken middleware applied for GET, PUT, DELETE routes
router.put("/:id", validateToken, updateDish);
router.delete("/:id", validateToken, deleteDish);

module.exports = router;
