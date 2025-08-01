//Duas maneiras de criar Array:
// Array<T>    ou   T[] (qualquer tipo)
function multiplicaArgs(...args:Array<number>):number {
  return args.reduce((ac, valor) => ac * valor, 1)
}

function concatenaString(...args:Array<string>):string {
  return args.reduce((ac, valor) => ac + valor)
}

function toUppercase(...args:string[]):string[] {
  return args.map(valor => valor.toUpperCase())
}

const result = multiplicaArgs(2,4,6)
const concatenacao = concatenaString('casa','carro','capa')
const maiuscula = toUppercase('casa','carro','capa')

console.log(result) // 48
console.log(concatenacao)// casacarrocapa
console.log(maiuscula)// [ 'CASA', 'CARRO', 'CAPA' ]
