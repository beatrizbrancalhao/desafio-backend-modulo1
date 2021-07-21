const frase = "caps"
const frase2 = "cAPS"
const frase3 = "cAPs"
const frase4 = "CAPS"

const minuscula = frase4.toLowerCase()
const maiuscula = frase4.toUpperCase()
const erro = frase4[0].toLowerCase() + maiuscula.substr(1)
const consertada = minuscula[0].toUpperCase() + minuscula.substr(1)

if (frase4 === erro) {
    console.log(consertada)
} else if (frase4 === maiuscula) {
    console.log(consertada)
} else {
   console.log(frase4)
}
