# PopWebsite

Italian Version:

Sito web realizzato per il Pop Café di Camerino.

Si tratta di un sito vetrina che mostra i servizi del bar ed altre informazioni utili ai clienti. Oltre a questo, si aggiungono due funzionalità:

    - Prenotazione: possibilità di prenotare un tavolo con conferma della prenotazione via email. Dal lato backoffice si possono visionare le prenotazioni, si possono modificare i loro dati e si possono eliminare.
    - Menù del giorno dinamico: le cuoche possono aggiornare il "menù del giorno" accedendo ad un'area privata, selezionando dei piatti dal database o aggiungendone di nuovi.

Il frontend è stato sviluppato su un template chiamato "Restho" scritto utilizzando il framework next.js e REACT. In ogni pagina vengono effettuate delle importazioni per tutti i moduli utili al progetto. 

La struttura (layout) include i cosiddetti componenti, che rappresentano diverse sezioni.

I componenti rappresentano uno dei vantaggi del framework di REACT, in quanto sono riutilizzabile  e semplificano l’applicazione, anche in termini di “pesantezza”, in quanto si evita la duplicazione del codice. 

La separazione poi porta la modularità: i componenti suddividono l’interfaccia a blocchi in grado di essere modificati singolarmente, creando anche un’organizzazione gerarchica.

Il front-end è responsive grazie all’utilizzo di Bootstrap5 (mobile first).

Coem fogli di stile è presente sia il css che l’scss:

- (CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per definire l'aspetto e il layout degli elementi HTML in una pagina web. CSS definisce le proprietà di stile come il colore, la dimensione del testo, il margine, il padding e molte altre per personalizzare l'aspetto dei componenti della pagina.

- SCSS (Sassy CSS) è una sintassi di estensione di CSS che offre funzionalità aggiuntive e miglioramenti rispetto a CSS standard. SCSS consente di utilizzare variabili, funzioni, mixin e operatori logici, rendendo il codice CSS più modulare, riutilizzabile e facile da gestire.)

In entrambi sono definite delle variabili globali per i colori di default, alcuni cambiati in base alla palette grafica stabilita alla visione del rendering del nuovo locale.

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
    - Dynamic daily menu: The chefs can update the 'daily menu' by accessing a private area, where they can select dishes from the database or add new ones. 

The frontend has been developed using a template called "Restho" written using the Next.js and React frameworks. Import statements are made on each page for all the modules necessary for the project.

The structure (layout) includes components, which represent different sections.

Components are one of the advantages of the React framework as they are reusable and simplify the application, even in terms of "heaviness" by avoiding code duplication.

The separation also brings modularity: components divide the interface into blocks that can be individually modified, creating a hierarchical organization.

The front-end is responsive thanks to the use of Bootstrap 5 (mobile-first).

As for the stylesheets, both CSS and SCSS are present:

CSS (Cascading Style Sheets) is a style language used to define the appearance and layout of HTML elements on a web page. CSS defines style properties such as color, text size, margin, padding, and many more to customize the appearance of page components.

SCSS (Sassy CSS) is a CSS extension syntax that offers additional features and improvements over standard CSS. SCSS allows the use of variables, functions, mixins, and logical operators, making CSS code more modular, reusable, and easy to manage.

Both CSS and SCSS define global variables for default colors, some of which are changed based on the graphic palette established during the rendering of the new location.

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
