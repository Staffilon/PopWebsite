const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

// Imposta la chiave API di SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Configura il trasportatore di Nodemailer con le credenziali del tuo servizio di invio email
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "popcamerino@gmail.com",
        pass: "password",
    },
});

// Funzione per inviare la notifica via email
const sendBookingNotification = async (bookingData) => {
    const { type, date, time, numberOfPeople, name, surname, email } =
        bookingData;

    // Crea il corpo del messaggio
    const message = `
    Nuova prenotazione effettuata:
    Tipo: ${type}
    Data: ${date}
    Ora: ${time}
    Numero di persone: ${numberOfPeople}
    Nome: ${name}
    Cognome: ${surname}
    Email: ${email}
  `;

    // Configura il messaggio email
    const mailOptions = {
        from: "popcamerino@gmail.com",
        to: "popcamerino@gmail.com",
        subject: "Nuova prenotazione",
        text: message,
    };

    try {
        // Invia l'email utilizzando il trasportatore di Nodemailer
        sgMail
        .send(mailOptions);
        console.log("Notifica email inviata con successo!");

        // Invia anche la notifica tramite SendGrid
        await sgMail.send(mailOptions);
        console.log("Notifica email SendGrid inviata con successo!");
    } catch (error) {
        console.error(
            "Errore durante l'invio della notifica via email:",
            error
        );
    }
};

module.exports = {
    sendBookingNotification,
};
