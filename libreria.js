// LIBRERIA FUNZIONI

function randomNumber(min, max) {
    //console.log(arguments);//
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function isEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function notificationError(msgError){
    const alerta = document.createElement('div');
    alerta.className='alert alert-danger';
    alerta.innerHTML = msgError;
    return alerta;
}

function removeFirstNotification(){
    const alertToRemove = document.querySelector('.alert');
    console.log(alertToRemove);
   if(alertToRemove) alertToRemove.remove();
}
// const parola = 'pippo';
// const parolaLen = parola.length;
// let parolaGirata = parola.split('').reverse().join('');
// for(let i = parolaLen - 1; i >= 0; i-- ){
//     parolaGirata += parola.charAt(i);
// }
// console.log(parolaGirata);

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

// let parolaValue = parolaUser.value;
// let parolaLen = parolaValue.length;

// let parolaGirata = parolaValue.split('').reverse().join('');

// if(parolaGirata == parolaValue){
//     contenitoreRisultato.innerHTML = 'Questo è un palindromo: ' + parolaValue;
// } else{
//     contenitoreRisultato.innerHTML = 'Questo  non è un palindromo: ' + parolaValue;
// }

