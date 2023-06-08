import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
                                            placeholder="Numero di Telefono*"
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
                                    <div className="form-inner date-icon">
                                        <ReactDatePicker
                                            selected={startDate1}
                                            onChange={(date) =>
                                                setStartDate1(date)
                                            }
                                            placeholderText="Data"
                                            className="claender"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-25">
                                    <div className="form-inner">
                                        <select className="time-select">
                                            <option value="Ora">
                                                08 : 00 am
                                            </option>
                                            <option>09 : 00 am</option>
                                            <option value={1}>
                                                10 : 00 am
                                            </option>
                                            <option value={2}>
                                                11 : 00 am
                                            </option>
                                            <option value={3}>
                                                12 : 00 pm
                                            </option>
                                            <option value={4}>
                                                01 : 00 pm
                                            </option>
                                            <option value={5}>
                                                02 : 00 pm
                                            </option>
                                            <option value={6}>
                                                03 : 00 pm
                                            </option>
                                            <option value={7}>
                                                04 : 00 pm
                                            </option>
                                            <option value={8}>
                                                05 : 00 pm
                                            </option>
                                            <option value={9}>
                                                06 : 00 pm
                                            </option>
                                            <option value={10}>
                                                07 : 00 pm
                                            </option>
                                            <option value={11}>
                                                08 : 00 pm
                                            </option>
                                            <option value={12}>
                                                09 : 00 pm
                                            </option>
                                            <option value={13}>
                                                10 : 00 pm
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-25">
                                    <div className="form-inner">
                                        <input
                                            type="text"
                                            placeholder="Tipo"
                                            name="type"
                                            value={bookingData.type}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-inner">
                                        <button type="submit">
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
