export class Pessoa {
    public nome: string;
    public sobrenome: string;
    private idade: number;
    protected cpf: string;

    constructor(nome: string,sobrenome: string,idade: number,cpf:string){
        this.cpf = cpf
        this.nome = nome
        this.idade = idade
        this.sobrenome = sobrenome
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
        getNomeCompleto(){
        return 'Isso vem do aluno' + this.nome + ' ' + this.sobrenome
    }
}

export class Cliente extends Pessoa{
    getNomeCompleto(){
        return 'Isso vem do cliente' + this.nome + ' ' + this.sobrenome
    }
}

const aluno = new Aluno('Joao', 'Flavio', 20, '111111111-11')
const cliente = new Cliente('Joao', 'Flavio', 20, '111111111-11')
const pessoa = new Pessoa('Joao', 'Flavio', 20, '111111111-11')

console.log(aluno.getNomeCompleto())
console.log(cliente.getNomeCompleto())
console.log(pessoa.getNomeCompleto())
