// npm i @types/biblioteca -D 
import validator from 'validator';
import _ from 'lodash'; //biblioteca para mexer com arrays e objetos no js

console.log(validator.isEmail('joao@gmail.com')) 
console.log(_.clone([1, 2 ,3, 4, 5])) //uso do lodash