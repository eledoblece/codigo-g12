// function esPositivo(numero) {
//     if (Math.round(numero) > 0) return 'Es positivo';
//     if (Math.round(numero) < 0) return 'Es negativo';
//     else return false;

// }

// const resultado1 = esPositivo(5)
// const resultado2 = esPositivo(-3)
// const resultado3 = esPositivo(0)

// console.log(resultado1);
// console.log(resultado2);
// console.log(resultado3);

function isPositive(number) {
    if (number === 0) return false;

    return number > 0 ? "positive" : "negative";
}

const resultado1 = isPositive(5);
const resultado2 = isPositive(-3);
const resultado3 = isPositive(0);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
