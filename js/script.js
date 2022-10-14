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

    function palindromo(inputstringValue, inputStringLength, parolaGirata, containerRisultatoHTML){
        let (inputstringValue) = inputstring.value;
        let (inputStringLength) = inputString.length;
        let (parolaGirata) = (inputstringValue).split('').reverse().join('');
    
        if(parolaGirata == inputstringValue){
            (containerRisultatoHTML).innerHTML = 'Questo è un palindromo: ' + (inputstringValue);
        } else {
            (containerRisultatoHTML).innerHTML = 'Questo non è un palindromo: ' + (inputstringValue);
        }
    }
  verifica(parolaValue, parolaLen, parolaGirata, contenitoreRisultato)
    
}

buttonVerifica.addEventListener('click', evento)

