const min = 25;
const km = 11.5;

let precoMin = 0
if (min < 20) {
     precoMin = min * 50;
} else {
    precoMin = 20 * 50 + (min - 20) * 30
}

let precoKm = 0
if (km < 10) {
     precoKm = km * 70;
} else {
    precoKm = 10 * 70 + (km - 10) * 50
}

const soma = (precoMin + precoKm) / 100

console.log(soma.toFixed(2) * 100)