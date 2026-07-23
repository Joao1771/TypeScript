export class Carro {
    private readonly motor= new Motor()

    ligar(): void {
        this.motor.ligar()
    }

    acelerar(): void {
        this.motor.acelerar()
    }
    
    desligar(): void {
        this.motor.desligar()
    }
}

export class Motor {
    ligar(): void {
        console.log('Motor está ligado')
    }

    acelerar(): void {
        console.log('Motor está acelerando...')
    }

    desligar(): void {
        console.log('Motor está desligado')
    }
}

const carro = new Carro()
carro.ligar() // Motor está ligado
carro.acelerar() // Motor está acelerando...
carro.desligar() // Motor está desligado