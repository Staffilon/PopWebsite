const asyncHandler = require("express-async-handler");
const bookingService = require("../services/bookingService");

//@desc Get all bookings
//@route GET /api/bookings
//@access private
const getBookings = asyncHandler(async (req, res) => {
    const bookings = await bookingService.getAllBookings();
    res.status(200).json({ bookings });
});

//@desc Create a booking
//@route POST /api/bookings
//@access private
const createBooking = asyncHandler(async (req, res, next) => {
    const { type, date, time, numberOfPeople, name, surname, email } =
        req.body;
    if (
        !type ||
        !date ||
        !time ||
        !numberOfPeople.toString() ||
        !name ||
        !surname ||
        !email
    ) {
        res.status(400);
        throw new Error("I dati della prenotazione sono obbligatori!");
    }

    try {
        const booking = await bookingService.createBooking(req.body);
        res.status(201).json(booking);
    } catch (error) {
        if (error.statusCode === 11000) {
            res.status(409);
        } else if (error.statusCode === 400) {
            res.status(400);
        }
        next(error);
    }
});

//@desc Get a booking
//@route GET /api/bookings/:id
//@access private
const getBooking = asyncHandler(async (req, res) => {
    const booking = await bookingService.getBookingById(req.params.id);
    if (!booking) {
        res.status(404);
        throw new Error("Prenotazione non trovata");
    }
    res.status(200).json(booking);
});

//@desc Update a booking
//@route PUT /api/bookings/:id
//@access private
const updateBooking = asyncHandler(async (req, res, next) => {
    const booking = await bookingService.getBookingById(req.params.id);
    if (!booking) {
        res.status(404);
        throw new Error("Prenotazione non trovata");
    }
    try {
        const updatedBooking = await bookingService.updateBooking(
            req.params.id,
            req.body
        );
        res.status(200).json(updatedBooking);
    } catch (error) {
        if (error.statusCode === 11000) {
            res.status(409);
        } else if (error.statusCode === 400) {
            res.status(400);
        }
        next(error);
    }
});

//@desc Delete a booking
//@route DELETE /api/bookings/:id
//@access private
const deleteBooking = asyncHandler(async (req, res) => {
    const booking = await bookingService.getBookingById(req.params.id);
    if (!booking) {
        res.status(404);
        throw new Error("Prenotazione non trovata");
    }

    await bookingService.deleteBooking(req.params.id);
    res.status(200).json(booking);
});

module.exports = {
    getBookings,
    createBooking,
    getBooking,
    updateBooking,
    deleteBooking,
};
