//enum = objeto com array, em que o indice é declarado e se não for
// atribuido nenhum valor vai ser um numero em ordem p.s. n tem como acessar pelo valor
enum Cores {
  VERMELHO, // 0
  AZUL,  // 1
  AMARELO = 200, // 200
}

//unir
enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Cores)

function escolhaACor(cor: Cores) : void {
  console.log(Cores[cor])
}

escolhaACor(Cores['ROXO'])
