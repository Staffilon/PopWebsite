import axios from "axios";
import { BASE_BOOKINGS_URL } from "../constants";

const fetchBookings = async () => {
    try {
        const response = await axios.get(BASE_BOOKINGS_URL, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            },
        });
        console.log("dentro SERVICE blocco try");
        return response.data.bookings;
    } catch (error) {
        console.error("Errore durante la lettura delle prenotazioni: ", error);
        throw error;
    }
};

const deleteBooking = async (bookingId) => {
    try {
        const response = await axios.delete(
            `${BASE_BOOKINGS_URL}/${bookingId}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(
            "Errore durante la cancellazione di una prenotazione: ",
            error
        );
        throw error;
    }
};

const updateBooking = async (bookingId, updatedBooking) => {
    try {
        const response = await axios.put(
            `${BASE_BOOKINGS_URL}/${bookingId}`,
            updatedBooking,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(
            "Errore durante la modifica di una prenotazione: ",
            error
        );
        throw error;
    }
};

const createBooking = async (booking) => {
    try {
        const response = await axios.post(BASE_BOOKINGS_URL, booking);
        return response.data;
    } catch (error) {
        console.error(
            "Errore durante la creazione di una prenotazione:",
            error
        );
        throw error;
    }
};

export { createBooking, deleteBooking, fetchBookings, updateBooking };
