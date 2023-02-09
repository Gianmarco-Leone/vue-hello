// ! TRACCIA:
// ? Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// ? Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

// *SVOLGIMENTO:

// Controllo se Vue è collegato correttamente
console.log(Vue);

// Faccio funzionare Vue dichiarando una variabile locale collegata alla variabile globale Vue
const app = Vue.createApp({
    data() {
        return {
            // Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
            messageTitle: "I primi passi con Vue.js",

            // BONUS - Aggiungere alla pagina un'immagine, presa anch'essa da un data.
            image: "./img/01.webp"
        }
    }
});

// Monto Vue dentro il div contenitore dell'html
app.mount("#root");