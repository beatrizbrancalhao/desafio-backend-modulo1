const jogadores =  [
    {
      nome: "Herman",
      jogada: 0
    },
    {
      nome: "Rhodes",
      jogada: 0
    },
    {
      nome: "Beach",
      jogada: 0
    },
    {
      nome: "Laurel",
      jogada: 0
    },
    {
      nome: "Beatrice",
      jogada: 0
    },
    {
      nome: "Alison",
      jogada: 0
    },
    {
      nome: "Saundra",
      jogada: 0
    },
    {
      nome: "Klein",
      jogada: 0
    }
]

const um = jogadores.filter(x => x.jogada === 1)
const zero = jogadores.filter(x => x.jogada === 0)

  

for(let i = 0; i < 10; i++) {
  if (um.length === 1) {
      console.log(um[i].nome)
      break
  } else if (zero.length === 1) {
       console.log(zero[i].nome)
       break
  } else {
      console.log("NINGUEM")
      break
  }

}