function semRetorno(...args: string[]): void {
  console.log(args.join(" "));
}

const pessoa = {
  nome:'joao',
  sobrenome:'flavio',
  metodo(): void {
    console.log(this.nome + ' ' + this.sobrenome)
  }
};

semRetorno("joao", 'flavio')
pessoa.metodo()

export { pessoa }//para o module mode (talvez n precise mais)
