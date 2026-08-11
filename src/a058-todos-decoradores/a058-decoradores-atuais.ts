// Tipo do construtor da classe
type Constructor = new (...args: any[]) => any;


// Decorador de classe
function decoradorDeClasse<T extends Constructor>(construtor: T): T | void {
    console.log("CLASSE");
    console.log(construtor);
    console.log("###");
}


// Decorador de método de instância
function decoradorDeMetodo(
    metodo: Function,
    contexto: ClassMethodDecoratorContext
): void {
    console.log("MÉTODO NORMAL");
    console.log(metodo);
    console.log(contexto);
    console.log("###");
}


// Decorador de método estático
function decoradorDeMetodoEstatico(
    metodo: Function,
    contexto: ClassMethodDecoratorContext
): void {
    console.log("MÉTODO ESTÁTICO");
    console.log(metodo);
    console.log(contexto);
    console.log("###");
}


// Decorador de propriedade de instância
function decoradorDePropriedade(
    valor: unknown,
    contexto: ClassFieldDecoratorContext
): void {
    console.log("DECORADOR DE PROPRIEDADE");
    console.log(valor);
    console.log(contexto);
    console.log("###");
}


// Decorador de propriedade estática
function decoradorDePropriedadeEstatica(
    valor: unknown,
    contexto: ClassFieldDecoratorContext
): void {
    console.log("DECORADOR DE PROPRIEDADE ESTÁTICA");
    console.log(valor);
    console.log(contexto);
    console.log("###");
}


// Decorador de getter de instância
function decoradorDeGetterESetterNormal(
    getter: Function,
    contexto: ClassGetterDecoratorContext
): void {
    console.log("GETTER/SETTER NORMAL");
    console.log(getter);
    console.log(contexto);
    console.log("###");
}


// Decorador de getter estático
function decoradorDeGetterESetterEstatico(
    getter: Function,
    contexto: ClassGetterDecoratorContext
): void {
    console.log("GETTER/SETTER ESTÁTICO");
    console.log(getter);
    console.log(contexto);
    console.log("###");
}


// A classe e o uso dos decorators
@decoradorDeClasse
export class UmaPessoa {

    @decoradorDePropriedade
    nome: string;

    sobrenome: string;
    idade: number;

    @decoradorDePropriedadeEstatica
    static propriedadeEstatica = "";

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    @decoradorDeMetodo
    metodo(msg: string): string {
        return `${this.nome} ${this.sobrenome}: ${msg}`;
    }

    @decoradorDeMetodoEstatico
    static metodoEstatico(msg: string): string {
        return UmaPessoa.propriedadeEstatica + msg;
    }

    @decoradorDeGetterESetterNormal
    get nomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }

    set nomeCompleto(valor: string) {
        const palavras = valor.split(/\s+/g);
        const primeiroNome = palavras.shift();

        if (!primeiroNome) return;

        this.nome = primeiroNome;
        this.sobrenome = palavras.join(" ");
    }

    @decoradorDeGetterESetterEstatico
    static get staticPropertyGetterSetter(): string {
        return UmaPessoa.propriedadeEstatica;
    }

    static set staticPropertyGetterSetter(value: string) {
        UmaPessoa.propriedadeEstatica = value;
    }
}


// Uso da classe
const pessoa = new UmaPessoa("Joao", "Flavio", 20);
const metodo = pessoa.metodo("Ola mundo!");

console.log(metodo);