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

//router.use(validateToken);
router.route("/").get(getDishes).post(createDish);
router.route("/:id").get(getDish).put(updateDish).delete(deleteDish);

module.exports = router;
