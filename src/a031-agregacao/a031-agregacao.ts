export class CarrinhoCompras {
    private readonly produtos: Produto[] = []

    inserirProdutos(...produtos: Produto[]): void {
        produtos.forEach(produto => {
            this.produtos.push(produto)
        });
    }

    quantidade(): number {
        return this.produtos.length 
    }

    total(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0)
    }
}

export class Produto {
    constructor(public nome: string, public preco: number
    ) {}
}

const produto1 = new Produto('Camiseta', 49.9)
const produto2 = new Produto('Caneta', 0.9)
const produto3 = new Produto('Caneca', 1.9)

const carrinhoDeCompras = new CarrinhoCompras()
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3)
console.log(carrinhoDeCompras.total())