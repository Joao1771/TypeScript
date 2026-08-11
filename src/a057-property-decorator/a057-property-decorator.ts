function decorador(valor: string | undefined, contexto: ClassFieldDecoratorContext<UmaPessoa, string>
) {
    console.log(valor);
    console.log(contexto.name);
    
    // let valorProp: any
    // return {
    //     get: () => valorProp,
    //     set: (valor: any) => {valorProp = valor.split('').reverse();}
    // }

}
export class UmaPessoa {

    @decorador
    nome: string = "Joao";

    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        /*
        @decorador this.nome = nome;
        @decorador this.sobrenome = sobrenome;
        @decorador this.idade = idade;
         */
    }

    // metodo(@decorador: string): string {...
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