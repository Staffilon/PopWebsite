import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";

import { createBooking } from "../../services/bookingsService";

function ReservationForm() {
    const [startDate1, setStartDate1] = useState(false);

    const [bookingData, setBookingData] = useState({
        type: "",
        date: null,
        time: "",
        numberOfPeople: 0,
        name: "",
        surname: "",
        cellphoneNumber: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBookingData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateChange = (date) => {
        setBookingData((prevData) => ({
            ...prevData,
            date: date,
        }));
    };

    const handleHourChange = (event) => {
        const { value } = event.target;
        setBookingData((prevData) => ({
            ...prevData,
            time: `${value}:${prevData.time.split(":")[1] || ""}`,
        }));
    };

    const handleMinuteChange = (event) => {
        const { value } = event.target;
        setBookingData((prevData) => ({
            ...prevData,
            time: `${prevData.time.split(":")[0] || ""}:${value}`,
        }));
    };

    const generateOptions = (start, end) => {
        const options = [];
        for (let i = start; i <= end; i++) {
            const value = i.toString().padStart(2, "0");
            options.push(
                <option key={value} value={value}>
                    {value}
                </option>
            );
        }
        return options;
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        createBooking(bookingData)
            .then((data) => {
                // Handle success or show a success message
                console.log("Booking created successfully:", data);
            })
            .catch((error) => {
                // Handle error or show an error message
                console.error("Error creating booking:", error);
            });
    };

    return (
        <div className="container">
            <div className="reservation-1 mb-120 mt-120">
                <div className="row d-flex align-items-center justify-content-center mb-40">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <span>
                                <img
                                    className="left-vec"
                                    src="assets/images/icon/sub-title-vec.svg"
                                    alt="sub-title-vec"
                                />
                                Prenotazione Online
                                <img
                                    className="right-vec"
                                    src="assets/images/icon/sub-title-vec.svg"
                                    alt="sub-title-vec"
                                />
                            </span>
                            <h2>Per la Prenotazione Online</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <form>
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-6 mb-25">
                                    <div className="form-inner">
                                        <input
                                            type="text"
                                            placeholder="Nome*"
                                            name="name"
                                            value={bookingData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-25">
                                    <div className="form-inner">
                                        <input
                                            type="text"
                                            placeholder="Cognome*"
                                            name="surname"
                                            value={bookingData.surname}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-25">
                                    <div className="form-inner">
                                        <input
                                            type="text"
                                            placeholder="Numero di Telefono"
                                            name="cellphoneNumber"
                                            value={bookingData.cellphoneNumber}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-25">
                                    <div className="form-inner">
                                        <input
                                            type="number"
                                            placeholder="Numero di Persone"
                                            name="numberOfPeople"
                                            value={bookingData.numberOfPeople}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-25">
                                    <div className="form-inner">
                                        <ReactDatePicker
                                            selected={bookingData.date}
                                            onChange={handleDateChange}
                                            placeholderText="Data"
                                            className="claender"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-25">
                                    <div className="form-inner">
                                        <select
                                            className="time-select"
                                            name="hours"
                                            value={
                                                bookingData.time.split(":")[0]
                                            }
                                            onChange={handleHourChange}
                                            required
                                        >
                                            {generateOptions(8, 20)}
                                        </select>
                                        :
                                        <select
                                            className="time-select"
                                            name="minutes"
                                            value={
                                                bookingData.time.split(":")[1]
                                            }
                                            onChange={handleMinuteChange}
                                            required
                                        >
                                            <option value="">MM</option>
                                            <option value="00">00</option>
                                            <option value="15">15</option>
                                            <option value="30">30</option>
                                            <option value="45">45</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-25">
                                    <div className="form-inner">
                                        <select
                                            className="time-select"
                                            name="type"
                                            value={bookingData.type}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">
                                                Select type
                                            </option>
                                            <option value="Apericena">
                                                Apericena
                                            </option>
                                            <option value="Aperitivo">
                                                Aperitivo
                                            </option>
                                            <option value="Pranzo">
                                                Pranzo
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-inner">
                                        <button
                                            type="submit"
                                            onClick={handleFormSubmit}
                                        >
                                            Prenota Ora
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReservationForm;
