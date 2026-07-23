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

interface TipoNome {
    nome: string
}

interface TipoSobrenome {
    sobrenome: string
}

interface TipoNomeCompleto {
    nomeCompleto(): string
}

type TipoPessoas = TipoNome & TipoSobrenome & TipoNomeCompleto
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

//pode ser implementado mais de um
export class Pessoa implements TipoPessoas { // TipoNome, TipoSobrenome, TipoNomeCompleto
    
    constructor(public nome: string,public sobrenome: string){}

    nomeCompleto(): string {
        return this.nome +  ' ' + this.sobrenome
    }
}

const pessoa = new Pessoa('Joao', 'Flavio')
console.log(pessoa.nomeCompleto())