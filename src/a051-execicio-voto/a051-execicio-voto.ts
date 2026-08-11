type TipoVoteItem = {
    nome: string,
    qtd:number,
}

type TipoVoteOptions = {
    options: TipoVoteItem[],
    showOptions(): void,
    addOptions(item:TipoVoteItem): void,
    removeOption(item:TipoVoteItem):void,
    vote(item:VoteItem): void,
}

class VoteItem implements TipoVoteItem{
    constructor(public nome:string){}

    qtd = 0

}

class VoteOptions implements TipoVoteOptions {

    public options: VoteItem[] = []

    showOptions(){
        this.options.forEach((item) => console.log(item.nome, ":", item.qtd))
    }

    addOptions(...item:TipoVoteItem[]) {
        this.options.push(...item)
    }

    removeOption(itemExcluir:TipoVoteItem) {
        this.options = this.options.filter((valor) => valor !== itemExcluir)
    }

    vote(item:VoteItem) {
        item.qtd++
    }
}


const typescript = new VoteItem("Typescript")
const javascript = new VoteItem("Javascript")
const python = new VoteItem("Python")
const azul = new VoteItem("Azul")
const vermelho = new VoteItem("Vermelho")
const amarelo = new VoteItem("Amarelo")

let votacaoLinguagens = new VoteOptions()
let votacaoCores = new VoteOptions()

votacaoCores.addOptions(azul, vermelho, amarelo)
votacaoLinguagens.addOptions(typescript,javascript,python)
