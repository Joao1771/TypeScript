type FuncaoFiltro<U> = (
    value: U,
    index?: number,
    array?: U[]
) => boolean

function filtro<T>(funcao: FuncaoFiltro<T>, array: T[]){
    const newArray = []
    for(let valor of array){
        if(funcao(valor)) newArray.push(valor)
    }
}

const array = [1,2,3,4,5,6,7,8,9,10]

const arrayFiltradoOfc = array.filter((value) => value < 5)
console.log(arrayFiltradoOfc)

const arrayFiltrado = filtro((value) => value < 5, array)
console.log(arrayFiltradoOfc)