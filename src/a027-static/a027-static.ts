//forma antiga (ainda usada em java)
export class Pessoa {
constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf:string){
    }

    setCpf(valor: string): void{
        this.cpf = valor
    }
    getCpf(){
        return this.cpf.replace(/\D/g, '')
    }

}
const pessoa = new Pessoa('Joao', 'Flavio', 17, '123.456.789-00')
pessoa.setCpf('123.456.789-99')
console.log(pessoa.getCpf())// 123.456.789-99

//forma js
export class Pessoa1 {
constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf:string){
        this.cpf = _cpf
    }

    set cpf(valor: string){
        this._cpf = valor
    }
    get cpf(){
        return this._cpf.replace(/\D/g, '')
    }

}
const pessoa1 = new Pessoa1('Joao', 'Flavio', 17, '123.456.789-00')
pessoa1.cpf = '123.456.789-99'
console.log(pessoa1.cpf)// 123.456.789-99