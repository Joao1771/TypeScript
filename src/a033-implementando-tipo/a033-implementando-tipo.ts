// export abstract class TipoPessoa{
//     protected abstract nome: string
//     protected abstract sobrenome: string
//     protected abstract nomeCompleto(): string
// }

type TipoPessoa = {
    nome: string
    sobrenome: string
    nomeCompleto(): string
}

type TipoNome = {
    nome: string
}

type TipoSobrenome = {
    sobrenome: string
}

type TipoNomeCompleto = {
    nomeCompleto(): string
}

type TipoPessoas = TipoNome & TipoSobrenome & TipoNomeCompleto

//pode ser implementado mais de um
export class Pessoa implements TipoPessoas { // TipoNome, TipoSobrenome, TipoNomeCompleto
    
    constructor(public nome: string,public sobrenome: string){}

    nomeCompleto(): string {
        return this.nome +  ' ' + this.sobrenome
    }
}

const pessoa = new Pessoa('Joao', 'Flavio')
console.log(pessoa.nomeCompleto())