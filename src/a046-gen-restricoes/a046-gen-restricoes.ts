type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K]

const ObterChave: ObterChaveFn = (objeto, chave) => objeto[chave]

const animal = {
    cor: 'Rosa',
    vacinas: ['vacina 1', 'vacina 2'],
    idade: 10
}

const vacinas = ObterChave(animal, 'vacinas')
const cor = ObterChave(animal, 'cor')
const idade = ObterChave(animal, 'idade')