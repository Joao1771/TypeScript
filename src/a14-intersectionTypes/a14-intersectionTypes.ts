// se | eh o or, o & eh o and

type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemIdade = { idade:number }
type Pessoa = TemIdade & TemNome & TemSobrenome //AND
//type Pessoa = TemIdade | TemNome | TemSobrenome (PODE ter um ou outro...)

//Teoria dos conjuntos
type AB = 'A' | 'B'
type AC = 'A' | 'C'
type AD = 'A' | 'D'
type Intersecao = AB & AC & AD

//para ser do tipo Pessoa DEVE atender a todos
const pessoa: Pessoa = {
  nome: 'joao',
  sobrenome:'miranda',
  idade: 30,
}

console.log(pessoa)
// {
//   nome: 'joao',
//   sobrenome:'miranda',
//   idade: 30,
// }
