type Constructor = new (...args: any[]) => any

function inverte(param1: string, param2: string) {
    return function <T extends Constructor>(target:T) {
    console.log('sou o decorador e recebi a', target)

    return class extends target {
        cor: string
        nome: string

        constructor(...args: any[]){
            super(...args)
            this.nome = this.inverte(args[0])
            this.cor = this.inverte(args[1])
        }

        inverte(valor: string){
            return valor. split('').reverse().join('') + " " + param1 + param2
        }
    }
}

}
function outroDecorador(target: Constructor){
    return target
}

@outroDecorador // segundo
@inverte('valor1', 'valor2') // primeiro
export class Animal {
    constructor(public name: string, public cor: string) {}
}


const animal = new Animal('gato', 'roxo')
console.log(animal) // > ... Animal{ nome: otag valor1valor2, cor: oxor valor1valor2}