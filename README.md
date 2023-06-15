# PopWebsite

Italian Version:

Sito web realizzato per il Pop Café di Camerino.

Si tratta di un sito vetrina che mostra i servizi del bar ed altre informazioni utili ai clienti. Oltre a questo, si aggiungono due funzionalità:

    - Prenotazione: possibilità di prenotare un tavolo con conferma della prenotazione via email. Dal lato backoffice si possono visionare le prenotazioni, si possono modificare i loro dati e si possono eliminare.
    - Menù del giorno dinamico: le cuoche possono aggiornare il "menù del giorno" accedendo ad un'area privata, selezionando dei piatti dal database o aggiungendone di nuovi. Si possono creare anche i piatti relativi alle altre categorie; essi potranno essere visionati nelle loro apposite sezioni dagli utenti del sito, ma non ci potrà essere la possibilità di discriminare tra di loro.

Il frontend è stato sviluppato su un template chiamato "Restho" in JSX con CSS e usando il framework Bootstrap 5, incluso SaaS files.

Il backend è realizzato in Node.js e Express. Il file "index.js" è responsabile di far partire il server. Sono presenti sottocartelle che racchiudono al loro interno file aventi scopo comune, come ad esempio i controller, i middleware, le routes, ecc.

Il backend gestisce le chiamate CRUD per quanto riguarda le prenotazioni, tutti i piatti del bar, i piatti del menu giornaliero e il login dell'utente, al quale conferisce un token JWT. È anche presente una task che elimina giornalmente le prenotazioni scadute.

Il database scelto è stato MongoDB, per la sua flessibilità e integrazione con Express.

Per quanto riguarda la sicurezza, abbiamo integrato:

    - Token JWT per quanto riguarda gli accessi non autorizzati alle informazioni sensibili del backoffice.
    - Input sanitization sia lato frontend (dompurify) che backend (xss-clean) per quanto riguarda l'input dell'utente nelle prenotazioni e il login per il backoffice.
    - Limite di richieste per IP per mitigare il carico sui server, utilizzando la libreria express-rate-limit.
    - Sanitizzazione dell'input per MongoDB con la libreria express-mongo-sanitize.
    - Utilizzo di diversi header HTTP per garantire la sicurezza, grazie alla libreria helmet.
    - Mitigazione degli attacchi "HTTP Parameter Pollution" mediante l'utilizzo della libreria hpp.

Il sito è visualizzabile su https://www.popcafecamerino.it

English Translation:

Website created for Pop Cafe in Camerino.

It is a showcase website that displays the services offered by the bar and provides other useful information for customers. In addition to that, two functionalities have been implemented:

    - Reservation: Customers can make table reservations, and the confirmation of the reservation is sent via email. On the back office side, it is possible to view, modify, and delete reservations.
    - Dynamic daily menu: The chefs can update the 'daily menu' by accessing a private area, where they can select dishes from the database or add new ones. They can also create dishes related to other categories. These dishes can be viewed in their respective sections by site users, but there is no option to discriminate among them.

The frontend was developed using a template called 'Restho' in JSX with CSS, using the Bootstrap 5 framework, including SaaS files.

The backend is built with Node.js and Express. The 'index.js' file is responsible for starting the server. There are subfolders that contain files with common purposes, such as controllers, middleware, routes, etc.

The backend handles CRUD requests for reservations, all bar dishes, daily menu dishes, and user login, for which it issues a JWT token. There is also a task that daily deletes expired reservations.

The chosen database is MongoDB, for its flexibility and integration with Express.

Regarding security, we have implemented:

    - JWT tokens to prevent unauthorized access to sensitive information in the back office.
    - Input sanitization on both the frontend (dompurify) and backend (xss-clean) for user input in reservations and back office login.
    - IP-based request rate limiting to mitigate server load, using the express-rate-limit library.
    - Input sanitization for MongoDB using the express-mongo-sanitize library.
    - Usage of various HTTP headers for security, with the help of the helmet library.
    - Mitigation of 'HTTP Parameter Pollution' attacks through the use of the hpp library.

The website can be viewed at https://www.popcafecamerino.it
