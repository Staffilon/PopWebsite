const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ["Apericena", "Aperitivo", "Pranzo"],
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        numberOfPeople: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        cellphoneNumber: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
