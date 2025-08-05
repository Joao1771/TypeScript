//never = nunca vai valer nada
function criaErro(): never {
  throw new Error("Erro qualquer")
}

criaErro()
