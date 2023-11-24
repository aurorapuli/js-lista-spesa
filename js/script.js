// creo il mio arrey con la lista della spesa

let listaSpesa = ["pasta", "uova", "guanciale", "formaggio"];

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