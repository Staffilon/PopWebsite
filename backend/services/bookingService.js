const Booking = require("../models/bookingModel");
const emailService = require("./emailService");

const getAllBookings = async () => {
  return await Booking.find();
};

const createBooking = async (data) => {
  const { type, date, time, numberOfPeople, name, surname, email } = data;

  validateBookingDateTime(date, time);
  validateNumberOfPeople(numberOfPeople);

  await handleDuplicateBookingNameAndDateTime(name, surname, date, time);

  const formattedEmail = formatEmail(email);

  const booking = await Booking.create({
    type,
    date,
    time,
    numberOfPeople,
    name,
    surname,
    email: formattedEmail,
  });
  
  await emailService.sendBookingNotification({
    type,
    date,
    time,
    numberOfPeople,
    name,
    surname,
    email: formattedEmail,
  });
  return booking;
};

const getBookingById = async (id) => {
  return await Booking.findById(id);
};

const updateBooking = async (id, data) => {
  const { type, date, time, numberOfPeople, name, surname, email } = data;
  validateBookingDateTime(date, time);
  validateNumberOfPeople(numberOfPeople);

  if (!(await isSameBookingBeingUpdated(id, data))) {
    await handleDuplicateBookingNameAndDateTime(name, surname, date, time);
  }

  const formattedEmail = formatEmail(email);

  const updatedBooking = await Booking.findByIdAndUpdate(
    id,
    { type, date, time, numberOfPeople, name, surname, email: formattedEmail },
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
  const [hour, minute] = time.split(":");
  const dateTime = new Date(date);
  dateTime.setHours(hour);
  dateTime.setMinutes(minute);

  const currentDate = new Date();

  if (dateTime < currentDate) {
    const error = new Error(
      "La data e l'ora della prenotazione sono scadute!"
    );
    error.statusCode = 400;
    throw error;
  }
};

const formatEmail = (email) => {
  // Controlla il formato dell'email utilizzando una espressione regolare
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Il formato dell'email non è valido.");
  }

  return email;
};

const validateNumberOfPeople = (numberOfPeople) => {
  if (numberOfPeople < 1) {
    throw new Error("Il numero delle persone deve essere maggiore di 0.");
  }
};

const isSameBookingBeingUpdated = async (id, data) => {
  const { date, time, name, surname } = data;

  const oldBooking = await Booking.findById(id);

  return (
    oldBooking.name === name &&
    oldBooking.surname === surname &&
    oldBooking.date.getTime() === new Date(date).getTime() &&
    oldBooking.time === time
  );
};

module.exports = {
  getAllBookings,
  createBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
};
