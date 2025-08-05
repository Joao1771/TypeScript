//type alias = eh dar nome para algum tipo, podendo ser criado
type Idade = number;
type Pessoa = {
  nome:string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type CorPreferida = CorCMYK | CorRGB

const pessoa: Pessoa = {
  idade: 30,
  nome: 'joao',
  salario:200_000, //200000 (pode dividir 3 zeros por underline)
}

export function setCorPreferida(pessoa: Pessoa,cor:CorPreferida):Pessoa {
  return {...pessoa, corPreferida:cor} // spread (...) para n mudar o objeto original
}

console.log(setCorPreferida(pessoa, 'Azul'))
console.log(pessoa) // o objeto original n foi alterado
