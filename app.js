const sum = (a,b) => a+b;


const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9;

    return valueInYen
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8;

    return valueInPound
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}