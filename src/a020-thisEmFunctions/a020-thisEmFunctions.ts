export function funcao(this: Date, nome: string, idade: number):void {
    console.log(this)
    console.log(nome, idade)
}

//não funciona pois ele não sabe o que é o this
// funcao('Joao') 

//call: chama instanciando o this.
funcao.call(new Date(), 'Joao', 20)

//apply: chama instanciando o this mas recebe apenas o this e um array com os outros argumentos.
funcao.apply(new Date(), ['Joao', 20])