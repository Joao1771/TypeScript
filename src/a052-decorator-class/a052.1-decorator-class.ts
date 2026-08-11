@decorator
export class Animal {
    constructor(public name: string, public cor: string) {}
}

// Decorator: modifica na criação da classe
function decorator<T extends new (...args: any[]) => any>(target:T) {
    return class extends target {
        cor: string
        nome: string

        constructor(...args: any[]){
            super(...args)
            this.nome = this.inverte(args[0])
            this.cor = this.inverte(args[1])
        }

        inverte(valor: string){
            return valor. split('').reverse().join()
        }
    }
}

// const AnimalDecorated = decorator(Animal)
const animal = new Animal('gato', 'roxo')
console.log(animal)