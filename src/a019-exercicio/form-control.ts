import isEmail from 'validator/lib/isEmail'

const form = document.querySelector("#form") as HTMLFormElement
// const button = document.querySelector("button")
// const inputs = Array.from(document.querySelectorAll("input"))
const formFields = Array.from(document.querySelectorAll(".form-fields"))

let motivoErro:string = ""
let input


// pega o motivoErro e coloca nas spans correspondente e mostra
function erro(motivoErro:string,elemento:Element):void{
  let span = elemento.children[2] as HTMLSpanElement // let span recebe span correspondente ao input
  elemento.classList.add('show-error-message')
  span.classList.add('show-error-message')

  if (span) span.innerHTML = motivoErro
}
 function verificar():void{ // verifica cada input
  let senhas:HTMLInputElement[] = []

  for(let formField of formFields){ // para cada input

    if(formFields.indexOf(formField) === 4) continue // pula o ultimo form-field do botao

    input = formField.children[1] as HTMLInputElement

    if (!(input instanceof HTMLInputElement)) {
      console.error("O campo não é um HTMLInputElement válido.");
      continue; // Se não for um input válido, continua para o próximo campo
    }
    if(verificarVazio(input)) {
      motivoErro = `A caixa não pode ficar vazia.`
      erro(motivoErro,formField)
    }
    else if(verificarCurto(input)) {
      motivoErro = `Menos de 5 caracteres`
      erro(motivoErro,formField)
    }
    else if(verificarLongo(input)) {
      motivoErro = `Mais de 50 caracteres.`
      erro(motivoErro,formField)
    }

    if(formFields.indexOf(formField) === 1){ // se o index do formField for 1 eh email
      if(verificarEmail(input)){

      }
    }

    if(formFields.indexOf(formField) === 2){// se o index do formField for 2 eh senha1
      if(input) senhas.push(input as HTMLInputElement)
    }

    if(formFields.indexOf(formField) === 3){// se o index do formField for 3 eh senha2
      if(input !== undefined) {
        senhas.push(input as HTMLInputElement)
      }
    }
    if(senhas.length === 2){
      if(senhas[0] !== undefined && senhas[1] !== undefined)
      verificarIguais(senhas[0],senhas[1])
    }
  }

 }
 //verifica se o input esta vazio
  function verificarVazio(elemento:HTMLInputElement):boolean{
    if(!elemento.value) return true
  return false
 }
 //verifica se eh maior q 50 caracteres
  function verificarLongo(elemento:HTMLInputElement):boolean{
    if(elemento.value.length > 50) return true
  return false
 }

 //verifica se eh menor q 5 caracteres
  function verificarCurto(elemento:HTMLInputElement):boolean {
    console.log(elemento)
    if(elemento.value.length < 5) return true
    return false
  }
  //verifica se senhas são iguais
  function verificarIguais(senha1:HTMLInputElement,senha2:HTMLInputElement):boolean{
    if(senha1.value != senha2.value){
        return true
    }
    return false
  }
  //verifica email com o validator
  function verificarEmail(elemento:HTMLInputElement):boolean{
    return false
  }

  //remove as classes de erro
  function tiraErro(elemento:Element):void{
  let span = elemento.children[2] as HTMLSpanElement
  elemento.classList.remove('show-error-message')
  span.classList.remove('show-error-message')
  }

form.addEventListener('submit',function(e){
  e.preventDefault()
  verificar()
  motivoErro = ""
})
