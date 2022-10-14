'use strict';

//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//PROCEDIMENTO:
// x creare input text (#parolaUser) in html e collegarlo in js 
// x mettere in una variabile il (#parolaUser).value
// x creare un bottone in html (#buttonVerifica) e collegarlo in js 
// x assegnare un evento a #buttonVerifica
// inserire una funzione (palindromo) all'interno di evento

//FUNZIONE PALINDROMO
// x mettere in una variabile (parolaValue) la parola inserita dall'utente
// (parolaValue) prendere lunghezza, splittarla (parolaPali), girarla con reverse (parolaGirata)
// creare ciclo for per unire le lettere
// For (let i = parolaLen - 1; i >= 0; i--){ parolaGirata += parolaValue.charAt(i)};

// if parola girata.value == parolaValue



const parolaUser = document.getElementById('parolaUser');
const buttonVerifica = document.getElementById('buttonVerifica');
const contenitoreRisultato = document.getElementById('contenitoreRisultato');

function evento(){

        palindromo(parolaUser, contenitoreRisultato );
}
buttonVerifica.addEventListener('click', evento)


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



