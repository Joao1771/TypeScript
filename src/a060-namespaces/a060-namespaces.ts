namespace MeuNameSpace {
    export const nomeDoNamespace = 'joao'

    export class PessoaDoNamespace {
        constructor(public nome: string) {}
    }

    const PessoaNamespace = new PessoaDoNamespace('Joao')
    console.log(PessoaNamespace)

    export namespace OutroNamespace {
        export const nomeDoNamespace = 'nome no outro namespace'
    }
}

const PessoaNamespace = new MeuNameSpace.PessoaDoNamespace('Joao')

console.log(PessoaNamespace) // PessoaDoNamespace { nome: 'joao'}
console.log(MeuNameSpace.nomeDoNamespace) //'joao'
console.log(MeuNameSpace.OutroNamespace.nomeDoNamespace) // 'nome no outro namespace'
