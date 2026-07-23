export class Escritor {
    private _ferramenta: Ferramenta | null = null

    constructor(private _nome: string) {}

    get nome(): string{
        return this._nome
    }

    set ferramenta(ferramenta: Ferramenta | null){
        this._ferramenta = ferramenta
    }

    get ferramenta(): Ferramenta | null {
        return this._ferramenta
    }

    escrever(): void {
        if(this.ferramenta === null){
            console.log("Não escrevo sem ferramenta.")
            return
        }
        this.ferramenta.escrever()
    }
}

export abstract class Ferramenta {
    constructor(private _nome: string) {}
    abstract escrever(): void

    get nome(): string {
        return this._nome
    }

}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está escrevendo`)
    }
}

export class MaquinaEscrever extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está digitando`)
    }
}

const escritor = new Escritor('Joao')
const caneta =  new Caneta('Bic')
const maquinaEscrever =  new MaquinaEscrever('Fortrek')

console.log(escritor.nome) // Joao
console.log(caneta.nome) // Bic
console.log(maquinaEscrever.nome) // Fortrek

escritor.ferramenta = caneta
escritor.ferramenta = maquinaEscrever
escritor.ferramenta = null // retira a ferramenta do escritor

// Bic está escrevendo | Fortrek está digitando | Não escrevo sem ferramenta.
escritor.escrever() 