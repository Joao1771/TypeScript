// type CoresObj = {
//     vermelho: string,
//     verde: string,
//     azul: string
// }

type CoresObj = typeof coresObj // igual ao de cima
type CoresChaves = keyof CoresObj // recebe todas as chaves do tipo

const coresObj = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue'
}

function traduzirCor( cor: CoresChaves, cores: CoresObj) {
    return cores[cor]
}

console.log(traduzirCor('vermelho', coresObj))