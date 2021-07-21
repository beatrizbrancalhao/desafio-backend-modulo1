const texto = 'Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer '

const formatado = texto.trim();
const contador = formatado.split(" ");
const filtrado = contador.filter(x => x !== "");
console.log(filtrado.length)