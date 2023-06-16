const nodemailer = require("nodemailer");

// Configura il trasportatore di Nodemailer con le credenziali del tuo servizio di invio email
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: "popcamerino@gmail.com",
        pass: "pzbbnyfovonenzvg", //2NXk#Cl6j5Fv
    },
    tls: {
        rejectUnauthorized: false, // Accetta certificati SSL auto-firmati
    },
});

// Funzione per inviare la notifica via email
const sendBookingNotification = async (bookingData) => {
    const { type, date, time, numberOfPeople, name, surname, email } = bookingData;

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

    // Configura il messaggio email per l'utente che ha prenotato
    const userMailOptions = {
        from: "popcamerino@gmail.com",
        to: email,
        subject: "Conferma prenotazione",
        text: message,
        
    };

    // Configura il messaggio email per la notifica all'amministratore
    const adminMailOptions = {
        from: "popcamerino@gmail.com",
        to: "popcamerino@gmail.com",
        subject: "Nuova prenotazione",
        text: message,
    };

    try {
        // Invia l'email di conferma all'utente che ha prenotato
        await transporter.sendMail(userMailOptions);
        console.log("Email di conferma inviata con successo all'utente!");

        // Invia la notifica di prenotazione all'amministratore
        await transporter.sendMail(adminMailOptions);
        console.log("Notifica di prenotazione inviata con successo all'amministratore!");
    } catch (error) {
        console.error("Errore durante l'invio della notifica via email:", error);
    }
};

module.exports = {
    sendBookingNotification,
};
