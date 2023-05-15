// Consegna:
// Dato un array di oggetti letterali con:
// - url dell’immagine
// - titolo
// - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sopra e sotto, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.Milestone 2:
// Aggiungere il **ciclo infinito** del carosello.
// Ovvero se l’immagine attiva è la prima e l’utente clicca la freccia verso sopra, l’immagine che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sotto.


const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

let container = document.querySelector('div.album');
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
images.forEach((photo) => {
    
    // creo il div con all'interno l'immagine e i testi
    container.innerHTML +=`
    <div>
    <img class='invisible' src=${photo.image}></img>
    <h2 class='invisible'>${photo.title}</h2>
    <p class='invisible'>${photo.text}</p>
    </div>`


});
// imposto un indice per segnare la foto attiva al momento 
let activeElement = 0;
// seleziono le foto per poterle gestire
let pic = document.querySelectorAll('img');
let title = document.querySelectorAll('h2');
let txt = document.querySelectorAll('p');


// la prima immagine deve essere active
pic[activeElement].classList.add('active');
title[activeElement].classList.add('active');
txt[activeElement].classList.add('active');





// seleziono la freccia che permetterà di mostrare le img una dopo l'altra

let arrowUp = document.querySelector('.arrow-top');
let arrowDown = document.querySelector('.arrow-bottom');





// Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


// funzione al click
arrowUp.addEventListener('click',
function() {
    // togli la classe active all'elemento attivo in quel momento
    pic[activeElement].classList.remove('active');
    title[activeElement].classList.remove('active');
    txt[activeElement].classList.remove('active');
    
if(activeElement == pic.length - 1 && title.length -1 && txt.length -1)
{
    activeElement = -1;
 
}
 // passare alla foto successiva
 activeElement ++;
   // alla foto successiva aggiungere la classe active
   pic[activeElement].classList.add('active');
   title[activeElement].classList.add('active');
   txt[activeElement].classList.add('active');

}
)



arrowDown.addEventListener('click',
function() {
    // togli la classe active all'elemento attivo in quel momento
    pic[activeElement].classList.remove('active');
    title[activeElement].classList.remove('active');
    txt[activeElement].classList.remove('active');
    
if(activePhoto == 0)
{
    activeElement = pic.length;
    activeElement = title.length;
    activeElement = txt.length;

 
}
 // passare alla foto successiva
 activeElement --;
   // alla foto successiva aggiungere la classe active
   pic[activeElement].classList.add('active');
   title[activeElement].classList.add('active');
   txt[activeElement].classList.add('active');

}
)

