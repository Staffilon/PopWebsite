import { format } from "date-fns";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = ({ booking, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedBooking, setEditedBooking] = useState({ ...booking });

    const handleDelete = () => {
        onDelete(booking._id);
    };

    const handleEdit = () => {
        if (isEditing) {
            onUpdate(editedBooking);
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedBooking((prevBooking) => ({
            ...prevBooking,
            [name]: value,
        }));
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        return `${year}/${month}/${day}`;
    };

    const handleDateChange = (selectedDate) => {
        try {
            const formattedDate = selectedDate
                ? format(selectedDate, "yyyy/MM/dd")
                : "";

            console.log("Selected Date:", selectedDate);
            console.log("Formatted Date:", formattedDate);

            // Update state only if the selected date is different
            if (formattedDate !== editedBooking.date) {
                setEditedBooking((prevBooking) => ({
                    ...prevBooking,
                    date: formattedDate,
                }));
            }
        } catch (error) {
            console.error("Error parsing date:", error);
            setEditedBooking((prevBooking) => ({
                ...prevBooking,
                date: "",
            }));
        }
    };

    return (
        <div className="booking">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        name="name"
                        value={editedBooking.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="surname"
                        value={editedBooking.surname}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="type"
                        value={editedBooking.type}
                        onChange={handleInputChange}
                    />
                    <DatePicker
                        name="date"
                        selected={
                            editedBooking.date
                                ? new Date(editedBooking.date)
                                : null
                        }
                        onChange={handleDateChange}
                        dateFormat="yyyy/MM/dd"
                    />

                    <input
                        type="text"
                        name="time"
                        value={editedBooking.time}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="numberOfPeople"
                        value={editedBooking.numberOfPeople}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="cellphoneNumber"
                        value={editedBooking.cellphoneNumber}
                        onChange={handleInputChange}
                    />
                </div>
            ) : (
                <div>
                    <p>Nome: {booking.name}</p>
                    <p>Cognome: {booking.surname}</p>
                    <p>Tipo: {booking.type}</p>
                    <p>Data: {formatDate(booking.date)}</p>
                    <p>Ore: {booking.time}</p>
                    <p>Numero di Persone: {booking.numberOfPeople}</p>
                    <p>Numero di Cellulare: {booking.cellphoneNumber}</p>
                </div>
            )}
            <div>
                <button onClick={handleEdit}>
                    {isEditing ? "Save" : "Edit"}
                </button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <hr />
        </div>
    );
};

export default Booking;
