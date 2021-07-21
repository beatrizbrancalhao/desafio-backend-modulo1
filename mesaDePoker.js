const min = 2
const max = 10

const valores = [0, 5, 6, 10, 11]

const filtrado = valores.filter(x => x >= min && x <= max)

console.log(filtrado)