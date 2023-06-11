import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    deleteBooking,
    fetchBookings,
    updateBooking,
} from "../../services/bookingsService";
import Booking from "./Booking";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const currentDate = new Date().toISOString().split("T")[0]; // Current date in "yyyy-mm-dd" format
    const [selectedDate, setSelectedDate] = useState(""); // State to store the selected date
    const router = useRouter();

    useEffect(() => {
        const getBookings = async () => {
            try {
                const data = await fetchBookings();
                console.log("Prenotazioni lette dal server:", data);
                setBookings(data);
            } catch (error) {
                console.error(
                    "Errore durante la lettura delle prenotazioni:",
                    error
                );

                if (error.response && error.response.status === 401) {
                    toast.error(
                        "Sessione scaduta oppure accesso non autorizzato, verrai inoltrato/a in pochi secondi al login."
                    );
                    setTimeout(() => {
                        router.push("/login");
                    }, 3000); // Delay of 2 seconds before redirecting
                } else {
                    toast.error("E' accaduto un errore, riprova.");
                }
            }
        };
        getBookings();
    }, []);

    const handleUpdateBooking = async (updatedBooking) => {
        try {
            // Send the updated booking to the server
            const response = await updateBooking(
                updatedBooking._id,
                updatedBooking
            );

            // Update the state with the updated booking
            setBookings((prevBookings) => {
                const updatedBookings = prevBookings.map((booking) => {
                    if (booking._id === updatedBooking._id) {
                        return response; // Use the updated booking from the server response
                    }
                    return booking;
                });
                return updatedBookings;
            });

            console.log("Prenotazione aggiornata:", updatedBooking);
        } catch (error) {
            console.error(
                "Errore durante l'aggiornamento della prenotazione:",
                error
            );

            if (error.response && error.response.status === 401) {
                toast.error(
                    "Sessione scaduta oppure accesso non autorizzato, verrai inoltrato/a in pochi secondi al login."
                );
                setTimeout(() => {
                    router.push("/login");
                }, 3000); // Delay of 2 seconds before redirecting
            } else {
                toast.error("E' accaduto un errore, riprova.");
            }
        }
    };

    const handleDeleteBooking = async (bookingId) => {
        try {
            // Show confirmation dialog or any other UI element here if needed
            const confirmDelete = window.confirm(
                "Sei sicuro di voler cancellare questa prenotazione?"
            );

            if (confirmDelete) {
                // Send the request to delete the booking
                await deleteBooking(bookingId);

                // Remove the deleted booking from the state
                setBookings((prevBookings) =>
                    prevBookings.filter((booking) => booking._id !== bookingId)
                );

                console.log("Prenotazione cancellata:", bookingId);
            }
        } catch (error) {
            console.error(
                "Errore durante la cancellazione della prenotazione:",
                error
            );

            if (error.response && error.response.status === 401) {
                toast.error(
                    "Sessione scaduta oppure accesso non autorizzato, verrai inoltrato/a in pochi secondi al login."
                );
                setTimeout(() => {
                    router.push("/login");
                }, 3000); // Delay of 2 seconds before redirecting
            } else {
                toast.error("E' accaduto un errore, riprova.");
            }
        }
    };

    const handleSortByChange = (event) => {
        const selectedSortBy = event.target.value;
        setSortBy(selectedSortBy);

        // Automatically clear the selected date when switching sorting types
        if (selectedSortBy !== "date") {
            setSelectedDate("");
        }
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const filteredBookings =
        sortBy === "today"
            ? bookings.filter((booking) => {
                  const bookingDate = new Date(booking.date)
                      .toISOString()
                      .slice(0, 10);
                  return bookingDate === currentDate;
              })
            : bookings;

    const sortedBookings = filteredBookings.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (dateA < dateB) {
            return -1;
        } else if (dateA > dateB) {
            return 1;
        } else {
            // Dates are equal, compare the time values
            const timeA = a.time.split(":");
            const timeB = b.time.split(":");
            const hourA = parseInt(timeA[0]);
            const hourB = parseInt(timeB[0]);
            const minuteA = parseInt(timeA[1]);
            const minuteB = parseInt(timeB[1]);

            if (hourA < hourB) {
                return -1;
            } else if (hourA > hourB) {
                return 1;
            } else {
                if (minuteA < minuteB) {
                    return -1;
                } else if (minuteA > minuteB) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
    });

    const filteredByDate = selectedDate
        ? sortedBookings.filter((booking) => {
              const bookingDate = new Date(booking.date)
                  .toISOString()
                  .slice(0, 10);
              return bookingDate === selectedDate;
          })
        : sortedBookings;

    return (
        <div>
            <ToastContainer />
            <h2>Bookings</h2>
            <div>
                <label htmlFor="sort-by">Sort By:</label>
                <select
                    id="sort-by"
                    value={sortBy}
                    onChange={handleSortByChange}
                >
                    <option value="">None</option>
                    <option value="today">Today</option>
                    <option value="date">By Date</option>
                </select>
            </div>
            {sortBy === "today" && (
                <>
                    <h3>Today's Bookings:</h3>
                    {filteredByDate.map((booking) => (
                        <Booking
                            key={booking._id}
                            booking={booking}
                            onUpdate={handleUpdateBooking}
                            onDelete={handleDeleteBooking}
                        />
                    ))}
                </>
            )}
            {sortBy === "date" && (
                <>
                    <h3>Choose a Date:</h3>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                    {filteredByDate.length > 0 ? (
                        filteredByDate.map((booking) => (
                            <Booking
                                key={booking._id}
                                booking={booking}
                                onUpdate={handleUpdateBooking}
                                onDelete={handleDeleteBooking}
                            />
                        ))
                    ) : (
                        <p>No bookings found for the selected date.</p>
                    )}
                </>
            )}
            {sortBy === "" && (
                <>
                    <h3>All Bookings:</h3>
                    {filteredBookings.map((booking) => (
                        <Booking
                            key={booking._id}
                            booking={booking}
                            onUpdate={handleUpdateBooking}
                            onDelete={handleDeleteBooking}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default Bookings;
