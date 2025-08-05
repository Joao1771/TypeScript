//literal = eh falar que algo tem o tipo 'joao' por exemplo, so pode valer 'joao'
//por causa do tipo. Acontece em:       const     as const      x : 'literal'
let x = 10
x = 0o0171001
const y = 10 // tipo de y eh 10
let a: 100

const person = {
  nome: 'joao' as const,
  sobrenome: 'miranda'
}

function escolhaCor(cor:'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Amarelo')) // Amarelo
