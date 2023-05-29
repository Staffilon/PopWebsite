const Booking = require("../models/bookingModel");

const getAllBookings = async () => {
    return await Booking.find();
};

const createBooking = async (data) => {
    const { type, date, time, numberOfPeople, name, surname, cellphoneNumber } =
        data;

    validateBookingDateTime(date, time);
    validateNumberOfPeople(numberOfPeople);

    await handleDuplicateBookingNameAndDateTime(name, surname, date, time);
    const booking = await Booking.create({
        type,
        date,
        time,
        numberOfPeople,
        name,
        surname,
        cellphoneNumber,
    });

    return booking;
};

const getBookingById = async (id) => {
    return await Booking.findById(id);
};

const updateBooking = async (id, data) => {
    const { type, date, time, numberOfPeople, name, surname, cellphoneNumber } =
        data;

    validateBookingDateTime(date, time);
    validateNumberOfPeople(numberOfPeople);

    await handleDuplicateBookingNameAndDateTime(name, surname, date, time);

    const updatedBooking = await Booking.findByIdAndUpdate(
        id,
        { type, date, time, numberOfPeople, name, surname, cellphoneNumber },
        { new: true }
    );

    return updatedBooking;
};

const deleteBooking = async (id) => {
    return await Booking.findByIdAndDelete(id);
};

const handleDuplicateBookingNameAndDateTime = async (
    name,
    surname,
    date,
    time
) => {
    const booking = await Booking.findOne({ name, surname, date, time });
    if (booking) {
        const error = new Error(
            "Prenotazione già inserita per questa data e ora"
        );
        error.statusCode = 11000;
        throw error;
    }
    return booking;
};

const validateBookingDateTime = (date, time) => {
    const dateTime = new Date(`${date}T${time}`);
    const currentDate = new Date();

    if (dateTime < currentDate) {
        const error = new Error(
            "La data e l'ora della prenotazione sono scadute!"
        );
        error.statusCode = 400;
        throw error;
    }
};

const validateNumberOfPeople = (numberOfPeople) => {
    if (numberOfPeople < 1) {
        throw new Error("Il numero delle persone deve essere maggiore di 0.");
    }
};

module.exports = {
    getAllBookings,
    createBooking,
    getBookingById,
    updateBooking,
    deleteBooking,
};
