//type assertion = declarar que eh daquele tipo ou tem q ser

//Condicional
const body1 = document.querySelector('body') // HTMLBodyElement | null
if (body1) body1.style.background = 'red'

//type assertion
const body3 = document.querySelector('body') as HTMLBodyElement // HTMLBodyElement
body3.style.background = 'red'

//HTMLElement
const input = document.querySelector('.input') as HTMLInputElement // HTMLBodyElement
input.value = 'qualquer coisa'
input.focus()


//NAO RECOMENDADOS
//Non-null assertion (!)
const body2 = document.querySelector('body')! // HTMLBodyElement
body2.style.background = 'red'

//sair totalmente do tipo e ir para unknown
const body4 = document.querySelector('body') as unknown as number // number
