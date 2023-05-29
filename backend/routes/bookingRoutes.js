const express = require("express");
const router = express.Router();
const {
    getBookings,
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking,
} = require("../controllers/bookingController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getBookings).post(createBooking);
router.route("/:id").get(getBooking).put(updateBooking).delete(deleteBooking);

module.exports = router;
