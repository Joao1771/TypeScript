export class Empresa {
    // public readonly nome: string = 'Joao';
    public readonly nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

const empresa1 = new Empresa('Bradesco')
console.log(empresa1) // Empresa { nome: 'Bradesco' }
console.log(empresa1.nome) // Bradesco


//forma longa
export class EmpresaColaboradores {
    public readonly nome: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

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

//forma curta
export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
    // essa forma: cria o atributo, insere no parâmetro e no corpo do constructor
}

const empresa2 = new EmpresaColaboradores('JF', '11.111.111/0001-11')
const colaborador1 = new Colaborador('Joao', 'Flavio')
const colaborador2 = new Colaborador('Ana', 'Julia')
const colaborador3 = new Colaborador('Juliana', 'Ferreira')
empresa2.adicionaColab(colaborador1)
empresa2.adicionaColab(colaborador2)
empresa2.adicionaColab(colaborador3)
console.log(empresa2)
empresa2.mostrarColab() // Colaborador { nome: 'Joao' sobrenome: 'Flavio' }...