
// Tipos básicos (aqui ocorre inferência de tipos, redundancia)
let nome: string = 'joao'; //string '' "" ``
let idade: number = 10; // number decimal, octal e hex
let adulto: boolean = false; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); //symbol tipo copyright
let big: bigint = 10n; // biginit ??????

//Arrays
let arrayNumeros: Array<number> = [1, 2, 3];
let arrayNumeros2: number[] = [1, 2, 3];
let arrayLetras: Array<string> = ['s', 'soma', 'casa'];
let arrayLetras2: string[] = ['s', 'soma', 'casa'];

//Objetos                                ? = opcional
let pessoa: {nome: string, idade:number, adulto?:boolean} = {
  idade: 20,
  nome: 'joao'
};

//funcoes                     retorna:number
function soma(x: number, y:number): number{
  return x+ y;
}
const soma2: (x:number,y:number) => number = (x,y) => x+y;

const res = soma(2,2); // ele ja sabe que é number antes de rodar

