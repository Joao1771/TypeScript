type Veiculo = {
    marca: string,
    ano: number
}

type Car = {
    brand: Veiculo["marca"],
    year: Veiculo["ano"],
    name: string
}

const carro: Car = {
    brand:"Fiat",
    year: 2024,
    name: "Uno"
}

console.log(carro)