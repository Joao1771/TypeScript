//unknown = igual o any mas o TS não deixa ser usado antes de verificar o q eh
let x : unknown;

x = 100;
x = 'joao'
x = 200

const y = 432

if (typeof x == 'number') console.log(x + y)
