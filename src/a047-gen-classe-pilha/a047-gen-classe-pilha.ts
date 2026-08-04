export class Pessoa<T, U> {
    constructor(public nome: T, public idade: U) {}
}

export class Pilha<T> {
    private contador = 0
    private elementos: { [k: number]: T } = {}

    push(elemento: T): void {
        this.elementos[this.contador] = elemento
        this.contador++
    }

    isEmpty(): boolean {
        return this.contador === 0
    }

    pop(): T | void{
        if(this.isEmpty()) return undefined

        this.contador--
        const elemento = this.elementos[this.contador]
        delete this.elementos[this.contador]
        return elemento
    }

    tamanho(): number {return this.contador}

    mostrarPilha(): void {
        for(let chave in this.elementos){
            console.log(this.elementos[chave])
        }
    }
}

const pilha = new Pilha<number>()
pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)

while (!pilha.isEmpty()) console.log(pilha.pop())