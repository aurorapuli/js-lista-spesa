// creo il mio arrey con la lista della spesa

const listaSpesa = ["pasta", "uova", "guanciale", "formaggio"];

let containerList = document.getElementById ('spesa');


// scrollo la mia lisa

let i = 0;

while (i < listaSpesa.length){
   

    console.log(listaSpesa [i]);

    // aggiungiamo all'UL le nostre LI

    const elementList = document.createElement ('li');

    elementList.append (listaSpesa [i]);

    containerList.append (elementList);

    i++;
}
//    creiamo le costanti per l'imput e il bottone
    const inputUser = document.getElementById ('myspesa');
    
    const sendButton = document.getElementById ('button');


    // creiamo la funzione del bottone

    sendButton.addEventListener ('click',
    function(){

        // aggiungiamo all'Array i valori dell'input
    
    listaSpesa.push(inputUser.value);

    console.log(listaSpesa);

    // aggiungiamo i valori assegnati alla lista

    const addList = document.createElement ('li')

    addList.append (inputUser.value);

    containerList.append (addList);

    
    }); 



