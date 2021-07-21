const lista = [12, 18, 27]

const ordem = lista.sort((a, b) => a - b)
const maisNovo = ordem.find(x => x >= 18)

if (maisNovo) {
    console.log(maisNovo)
} else {
  console.log('CRESCA E APARECA')}