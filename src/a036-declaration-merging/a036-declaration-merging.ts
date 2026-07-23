// Declaration merging: as duas se unem
interface Pessoa {
    nome: string
}

interface Pessoa {
    readonly sobrenome: string
}

interface Pessoa {
    readonly enderecos: readonly string[]
}

interface Pessoa {
    idade?: number //opcional
}

const pessoa: Pessoa = {
    nome: 'Joao',
    sobrenome: 'Flavio',
    enderecos: ['Av brasil'],
}
