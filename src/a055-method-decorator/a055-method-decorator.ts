// decorator da 5.x do Typescript
function decorador(metodo: Function, context: ClassMethodDecoratorContext){

    console.log(metodo)
    console.log(context)
    return function (this: any, ...args: any[]) {
        console.log("antes");

        return metodo.apply(this, args);
    };
}
export class UmaPessoa {
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    @decorador
    metodo(msg: string): string {
        return `${this.nome} ${this.sobrenome}: ${msg} `;
    }
    get nomeCompleto(): string {
        return this.nome + + this.sobrenome;
    }
    set nomeCompleto(valor: string) {
        const palavras = valor.split(/\s+/g);
        const primeiroNome = palavras.shift();
        if (!primeiroNome) return;
        this.nome = primeiroNome;
        this.sobrenome = palavras.join(' ');
    }
}