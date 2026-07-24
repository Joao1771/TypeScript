export class Calculadora {
    constructor(public numero: number) {}

    add(n:number): this {
        this.numero += n
        return this
    }
    sub(n:number): this {
        this.numero -= n
        return this
    }
    div(n:number): this {
        this.numero /= n
        return this
    }
    mul(n:number): this {
        this.numero *= n
        return this
    }
}

export class Subcalculadora extends Calculadora {
    pow(n:number): this {
        this.numero **= n
        return this
    }
}

//const calc = new Calculadora(10)
const calc = new Subcalculadora(10)
calc.add(5).mul(2).div(2).sub(5).pow(2) // o retorno this permite cadeias

// BUILDER - Gang of Four
export class RequestBuilder {
    private method: 'get' | 'post' | null = null
    private url: string | null = null

    setMethod(method:'get' | 'post'): this {
        this.method = method
        return this
    }

    setUrl(url:string): this {
        this.url = url
        return this
    }

    send(): void {
        console.log(`Enviando dados via ${this.method} para url: ${this.url}`)
    }
}

const request = new RequestBuilder() //builder
request.setUrl("http://link.com").setMethod("get").send()