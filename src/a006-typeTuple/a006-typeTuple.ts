//                 declaracao da tupla
const dadosCliente1: [number, string] = [1,'joao'];
const dadosCliente2: readonly [number, string, string] = [1,'pedro', 'barros'];//tupla do python
const dadosCliente3: [number, string, string?] = [1,'joao',];
const dadosCliente4: [number, string, ...string[]] = [1,'maria', 'miranda'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'carlos';
dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readonly array
const array1:readonly string[] = ['joao','flavio'];
const array2:ReadonlyArray<string> = ['joao','flavio'];

console.log(array1)
console.log(array2)
