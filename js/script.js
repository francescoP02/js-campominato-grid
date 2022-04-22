// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// 1. Genero numeri da 1 a 100
const gridSize = 100;
const gridArray = generateGridNumbers(gridSize);
console.log(gridArray);


// 2. Per ogni numero creo un grid item
const gridContainer = document.querySelector(".grid-container");
gridContainer.innerHTML = "";

for (let i = 0; i < gridArray.length; i++) {

    const gridNumber = gridArray[i];

    const domElement = generateGridItem(gridNumber)

    // aggiungo all'elmento appena creato la gestione del click
    domElement.addEventListener("click", function() {
        this.classList.add("active");
    });

    // appendo questo elemnto al contenitore
    gridContainer.append(domElement);

}




/**
 * Description
 * @param {any} gridSize -> grandezza array
 * @returns {any} -> array con i numeri della griglia
 */
function generateGridNumbers(gridSize) {
    // creare l'array
    const gridArray = [];

    // Creao i numeri random tramite while 
    for (let i = 1; i <= gridSize; i++) {
        gridArray.push(i);
    }

    return gridArray;
}

// DOM FUNCTIONS
/**
 * Description La funzione che genera l'elmento html con numero all'interno
 * @param {any} number -> il numero che dobbiamo inserire all'interno dell'elemnto html
 * @returns {any} -> l'elemento html (il mio div)
 */
 function generateGridItem(number) {
    // creo un elemnto html
    const newElement = document.createElement("div");

    // agiungo il span con il numero
    newElement.innerHTML = `<span>${number}</span>`

    // assegno la classe grid-item
    newElement.classList.add("grid-item");

    // ritorno elemnto
    return newElement;
}


