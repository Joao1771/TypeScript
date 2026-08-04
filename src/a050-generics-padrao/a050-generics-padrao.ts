//Record: define os tipos das chaves e dos valores de um objeto
const objeto1: Record<string, string | number> = {
    nome: 'joao',
    sobrenome: 'flavio',
    idade: 30
}

type PessoaProtocol = {
    nome?: string,
    sobrenome?: string,
    idade?: number,
}

//Required: Deixa tudo obrigatório
type PessoaRequired = Required<PessoaProtocol>
//Partial: Deixa tudo opcional
type PessoaPartial = Partial<PessoaRequired>

//Readonly: Deita tudo readonly
type PessoaReadonly = Readonly<PessoaPartial>

// Pick: Pega o(s) valor(es)
type PessoaPick = Pick<PessoaRequired, 'nome'>

const objeto2: PessoaRequired = {
    nome: 'joao',
    sobrenome: 'flavio',
    idade: 30
}

type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'

//Extract e Exclude
type TipoExclude = Exclude<ABC, CDE> // pega os valores do primeiro que não estão no segundo
type TipoExtract = Extract<ABC, CDE> // pega os valores que estão nos 2 (interseção)

type AccountMongo = {
    _id: string,
    nome: string,
    idade: number
}

// type AccountApi = {
//     id: string,
//     nome: string,
//     idade: number
// }

// esses dois são iguais ^ v
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {id: string}

const accountMongo: AccountMongo = {
    _id: 'dhaih3yui24r86gy832',
    nome: 'joao',
    idade: 30
}

// troca '_id' por 'id'
function mapAccount(accountMongo: AccountMongo): AccountApi {
    const {_id, ...accountData} = accountMongo
    return {... accountData, id: _id}
}

const accountApi = mapAccount(accountMongo)

console.log(accountApi) //{nome: 'joao', idade: 30, id: 'dhaih3yui24r86gy832'}