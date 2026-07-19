//forma longa
export class EmpresaColaboradores {
    public readonly nome: string;
    protected readonly colaboradores: Colaborador[] = [];
    private readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColab(colab: Colaborador) : void {
        this.colaboradores.push(colab)
    }

    mostrarColab() : void {
        for (const colab of this.colaboradores) console.log(colab)
    }
}

//empresa filha da classe    v
export class JF extends EmpresaColaboradores{
    constructor(){
        super("JF", '11.111.111/0001-11')
    }

    popColaborador(): Colaborador | null{
        const colaborador = this.colaboradores.pop()
        if(colaborador) return colaborador
        return null
    }
}
//forma curta
export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
    // essa forma: cria o atributo, insere no parâmetro e no corpo do constructor
}

const empresa2 = new JF()
const colaborador1 = new Colaborador('Joao', 'Flavio')
const colaborador2 = new Colaborador('Ana', 'Julia')
const colaborador3 = new Colaborador('Juliana', 'Ferreira')
empresa2.adicionaColab(colaborador1)
empresa2.adicionaColab(colaborador2)
empresa2.adicionaColab(colaborador3)
console.log(empresa2)
empresa2.mostrarColab() // Colaborador { nome: 'Joao' sobrenome: 'Flavio' }...
empresa2.popColaborador()