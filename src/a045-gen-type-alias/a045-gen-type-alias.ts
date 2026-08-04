interface PessoaProtocolo<T = string, U = number> {
    nome: T,
    sobrenome: T,
    idade: U
}

type PessoaProtocolo2<T = string, U = number> = {
    nome: T,
    sobrenome: T,
    idade: U
}

const aluno1: PessoaProtocolo<string, number> = {
    nome: 'joao',
    sobrenome: 'flavio',
    idade: 20
}

const aluno2: PessoaProtocolo = {
    nome: 'joao',
    sobrenome: 'flavio',
    idade: 20
}

const aluno3: PessoaProtocolo2 = {
    nome: 'joao',
    sobrenome: 'flavio',
    idade: 20
}