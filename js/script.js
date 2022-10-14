'use strict';

//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


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

const buttonPari = document.getElementById('buttonPari');
const buttonDispari = document.getElementById('buttonDispari');
const numeroUser = document.getElementById('numeroUser');
const contenitoreRisultato2 = document.getElementById('contenitoreRisultato2');
let  contenitoreParieDispari = document.getElementById('contenitoreParieDispari');
 

function pari() {

const numeroUserV = parseInt(numeroUser.value);

    //console.log('numero utente', numeroUserV);
   

    if(numeroUserV > 5 || numeroUserV < 1){
        const divAlert = notificationError('Puoi inserire un numero solo tra 1 e 5!');
        contenitoreParieDispari.prepend(divAlert);
    } else{
        removeFirstNotification()
    }
    
    let randomN = randomNumber(1, 5);
    const somma = numeroUserV + randomN;

    isEven(somma);

    if(isEven(somma) == false){
        console.log('Hai perso, il numero è dispari');
        contenitoreRisultato2.innerHTML = 'Il tuo numero: ' + numeroUserV + ' ' + 'Numero random: ' + randomN + ' ' + 'somma: ' + somma +  ' ' + 'Hai perso, il numero è dispari';
        
    } else{
        console.log('Hai vinto, il numero è pari');
        contenitoreRisultato2.innerHTML = 'Il tuo numero: ' + numeroUserV + ' ' + 'Numero random: ' + randomN + ' ' + 'somma: ' + somma +  ' ' + 'Hai vinto, il numero è pari';
    }
}
 

buttonPari.addEventListener('click', pari);

function dispari(){

    const numeroUserV = parseInt(numeroUser.value);

    //console.log('numero utente', numeroUserV);
   

    if(numeroUserV > 5 || numeroUserV < 1){
        const divAlert = notificationError('Puoi inserire un numero solo tra 1 e 5!');
        contenitoreParieDispari.prepend(divAlert);
    } else{
        removeFirstNotification()
    }
    
    let randomN = randomNumber(1, 5);
    const somma = numeroUserV + randomN;

    isEven(somma);

    if(isEven(somma) == true){
        console.log('Hai vinto, il numero è pari');
        contenitoreRisultato2.innerHTML = 'Il tuo numero: ' + numeroUserV + ' ' + 'Numero random: ' + randomN + ' ' + 'somma: ' + somma +  ' ' + 'Hai perso, il numero è pari';
        
    } else{
        console.log('Hai perso, il numero è dispari');
        contenitoreRisultato2.innerHTML = 'Il tuo numero: ' + numeroUserV + ' ' + 'Numero random: ' + randomN + ' ' + 'somma: ' + somma +  ' ' + 'Hai vinto, il numero è dispari';
    }
}
buttonDispari.addEventListener('click', dispari);