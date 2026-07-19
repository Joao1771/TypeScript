export class Pessoa {
constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf:string){
    }
    getIdade(){
        return this.idade
    }
    getCpf(){
        return this.cpf
    }
    getNomeCompleto(){
        return this.nome + ' ' + this.sobrenome
    }
}

export class Aluno extends Pessoa{
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf:string,
        public sala: string
    ){
        //super = classe pai
        super(nome,sobrenome,idade,cpf)//construtor da pessoa
        }

        getNomeCompleto(){
        console.log('Fazendo algo antes')
        //return super.getNomeCompleto()
        const result = super.getNomeCompleto()
        return result + "Hey"
    }
}

export class Cliente extends Pessoa{
    getNomeCompleto(){
        return 'Isso vem do cliente' + this.nome + ' ' + this.sobrenome
    }
}

const aluno = new Aluno('Joao', 'Flavio', 20, '111111111-11', '001')
const cliente = new Cliente('Joao', 'Flavio', 20, '111111111-11')
const pessoa = new Pessoa('Joao', 'Flavio', 20, '111111111-11')

console.log(aluno.getNomeCompleto())
console.log(cliente.getNomeCompleto())
console.log(pessoa.getNomeCompleto())
