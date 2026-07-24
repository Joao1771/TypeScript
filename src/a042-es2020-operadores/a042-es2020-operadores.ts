// Encadeamento opcional e Operador de coalescência nula
type Documento = {
    titulo: string,
    texto: string,
    data?: Date
}

const documento: Documento = {
    titulo: "Titulo do Documento",
    texto: "Lorem ipsun dolor amet...",
    //data: new Date()
}

// ? checa se é undefined e retorna undefined para o programa não quebrar
console.log(documento.data?.toDateString())

// ?? operador de coalescência nula
console.log(documento.data?.toDateString() ?? "Sou executada se o da direita é null|undefined")