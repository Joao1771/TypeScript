export abstract class Personagem{
    protected abstract icone: string

    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number
    ) {}

    atacar(personagem: Personagem) : void {
        this.bordao()
        personagem.perderVida(this.ataque)
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque
        console.log(`${this.nome} agora tem ${this.vida} de vida.`)
    }

    abstract bordao(): void 
}

export class Guerreira extends Personagem {
    protected icone = '\u{1F9DD}' // emoji de elfa (...)
    bordao(): void {
        console.log(this.icone + ' Está sentindo a energia?')
    }
}
export class Monstro extends Personagem {
    protected icone = '\u{1F9DF}' // emoji de zumbi
    bordao(): void {
        console.log(this.icone + ' Ta saindo da jaula.')
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000)
const monstro = new Monstro('Monstro', 87, 1000)

guerreira.atacar(monstro)
guerreira.atacar(monstro)
guerreira.atacar(monstro)
guerreira.atacar(monstro)
monstro.atacar(guerreira)
monstro.atacar(guerreira)
monstro.atacar(guerreira)
