
const primeNumber = (number) => {
    let message = "";
    const parsedNumber = +number;

    if(!parsedNumber && parsedNumber !==0){
        message = alert("Esto no es un numero");
        return message
    } 

    if(parsedNumber<2) return false;
        for(let i = 2; i < parsedNumber; i++){
            if(parsedNumber % i === 0) return false
        }
        return true

}

const chosenNumber = prompt("inserte un numero para saber si es primo")
const isNumerPrime = primeNumber(chosenNumber);

if(isNumerPrime !== undefined){
    if(isNumerPrime) alert("es un numero primo");
    else{
        alert("no es un numero primo")
    }
}