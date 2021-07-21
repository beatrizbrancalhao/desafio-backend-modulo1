const numeros = [1, 1, 1, 1]

const soma = numeros.reduce((acc, item) => acc + item)
const divisao = soma % numeros.length
const ultimo = numeros.length
const goleiro = numeros.length = divisao

if (divisao === 0) {
    console.log(ultimo)
} else {
    console.log(goleiro)
}