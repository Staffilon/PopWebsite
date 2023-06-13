import DOMPurify from "dompurify";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBooking } from "../../services/bookingsService";

function ReservationForm() {
    const [bookingData, setBookingData] = useState({
        type: "",
        date: null,
        time: "",
        numberOfPeople: "",
        name: "",
        surname: "",
        cellphoneNumber: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const sanitizedValue = DOMPurify.sanitize(value);
        setBookingData((prevData) => ({
            ...prevData,
            [name]: sanitizedValue,
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
        options.push(
            <option key="" value="">
                Ora
            </option>
        );
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

        // Convert the date to the local time zone offset
        const localDate = new Date(bookingData.date);
        const localOffset = localDate.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
        const utcDate = new Date(
            localDate.getTime() - localOffset
        ).toISOString();

        const bookingDataWithLocalDate = {
            ...bookingData,
            date: utcDate,
        };

        createBooking(bookingDataWithLocalDate)
            .then((data) => {
                // Handle success or show a success message
                console.log("Prenotazione creata con successo:", data);
                toast.success("Prenotazione creata con successo!");
            })
            .catch((error) => {
                // Handle error or show an error message
                console.error(
                    "Errore durante la creazione di una prenotazione: ",
                    error
                );
                const errorMessage =
                    error.response.data.message ||
                    "Non e' stato possibile creare la prenotazione.";
                toast.error(errorMessage);
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
                                        <PhoneInput
                                            country="IT"
                                            placeholder="Numero di Telefono"
                                            name="cellphoneNumber"
                                            value={bookingData.cellphoneNumber}
                                            onChange={(value) =>
                                                handleInputChange({
                                                    target: {
                                                        name: "cellphoneNumber",
                                                        value,
                                                    },
                                                })
                                            }
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
                                            min={1}
                                            max={40}
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
                                            utcOffset={new Date().getTimezoneOffset()}
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

                                        <select
                                            className="time-select"
                                            name="minutes"
                                            value={
                                                bookingData.time.split(":")[1]
                                            }
                                            onChange={handleMinuteChange}
                                            required
                                        >
                                            <option value="">Minuti</option>
                                            <option value="00">00</option>
                                            <option value="30">30</option>
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
                                                Seleziona tipo
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
            <ToastContainer />
        </div>
    );
}

export default ReservationForm;
