let x;
if(typeof x == "undefined") x = 20
console.log(x * 2); // 40

export function createPerson(firstName: string, lastName?:string): {
  firstName:string;
  lastName?:string;
} {
  return {firstName}//lastName da erro que não pode retornar undefined
}

export function squareOf(x:any) {
  if (typeof x == 'number') return x * x
  return null
}

const squareOfTwo = squareOf(2)
const squareOfString = squareOf('2')

if (squareOfTwo == null) {
  console.log('conta invalida')
} else {
  console.log(squareOfTwo * 100)//400
}
