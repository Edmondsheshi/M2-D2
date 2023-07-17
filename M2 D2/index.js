
//                       ( M2 D2 )

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/


/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


//                        ( DATATYPE PIU' UTILIZZATI  )

 //String
 //Questo tipo di dato è una sequenza di caratteri. E' anche detto alfanumerico. Ad esempio "Andrea".

 //Number
 //Questo tipo di dato è numerico. Può trattarsi di un numero intero (integer) o decimale (floating point).
 //Ad esempio, 3.14. In ogni caso javascript tratta tutti i numeri come numeri decimali a virgola mobile anche quando sono interi.

 //Boolean
 //E' il tipo di dato booleano. Può assumere solo i valori true (vero) o false (falso).

 //Date
 //E' il tipo di dato per memorizzare le date e l'ora.

 //Null
 //Questo data type lo rilevo nelle variabili che ho dichiarato ma a cui non ho ancora assegnato un valore.

 //Undefined
 //Questo data type lo rilevo quando qualcosa non è stato ben definito in una variabile a cui ho assegnato un valore.


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//Un oggetto è un contenitore di valori eterogenei, messi insieme a formare una struttura dati unica e tale da avere
//generalmente una particolare identità. Normalmente, infatti, un oggetto è utilizzato per rappresentare un'entità
//specifica come ad esempio una persona, un ordine, una fattura, una prenotazione, etc. tramite un'aggregazione di dati e di funzionalità.
//Per i nomi delle proprietà di un oggetto non abbiamo le restrizioni dei nomi delle variabili.
//Per essi può essere utilizzata una qualsiasi stringa, anche se con qualche vincolo quando tali proprietà vengono richiamate.


//Un oggetto tipicamente possiede:

//Dati, detti proprietà e rappresentati da coppie di nome-valore;
//Funzionalità, sono dette metodi e rappresentate da funzioni.




/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let primoNumero = 12
let secondoNuero = 20

let somma = (primoNumero + secondoNuero)
console.log(somma)




/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = eddy


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let y = 4

let risultatoSecondo = ( x - y)

console.log(risultatoSecondo);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = john
let name2 = John



console.log(name1 == name2);
