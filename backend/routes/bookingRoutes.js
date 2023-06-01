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

// Apply validateToken middleware to specific routes
router.route("/").get(validateToken, getBookings).post(createBooking);
router
    .route("/:id")
    .get(validateToken, getBooking)
    .put(validateToken, updateBooking)
    .delete(validateToken, deleteBooking);

module.exports = router;
