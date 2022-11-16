/* CONSEGNA:
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora 
di azzurro ed emetto un messaggio in console con il numero della cella 
cliccata. */

// richiamo il container in cui inserire le caselle generate
const container = document.querySelector("div.container");
console.log(container);

// richiamo il pulsante play per iniziare a creare le 100 caselle
const play = document.querySelector("div.ms_play");
play.addEventListener("click", 
    function() {

        // richiamo il div con classe .ms_instructions così da farlo sparire con display none
        let msInstructions = document.querySelector("div.ms_instructions");
        msInstructions.classList.add("ms_none");

        // creo il ciclo for per creare le 100 caselle nel DOM
        for(i = 1; i <= 100; i++) {

            // creo un nuovo elemento 
            let newElement = createElement("div", "ms_box");
            console.log(newElement);

            // aggiungo all'elemento creato un evento al click dello stesso
            newElement.addEventListener("click",
                function() {
                    this.classList.toggle("ms_click");
                }
            );

            // inserisco nell'elemento il valore di i
            newElement.append([i]);

            // inserisco nel DOM il nuovo elemento creato
            container.appendChild(newElement);
        }
    }
);


// FUNZIONI
// Creo la funzione per generare vari elementi con classi o id
function createElement (typeElement, idClassElement) {
    // creo l'elemento
    const element = document.createElement(typeElement);
    element.classList.add(idClassElement);

    // ritorno l'elemento
    return element;
} 