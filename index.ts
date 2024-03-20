import Carro from "./Carro.interface";

let numeros:number[]=[3,43,432,45432,424];
numeros.push(3231);//Agrega al final
numeros.unshift(31233);//Agrega al principio
console.log(numeros);
//numeros.pop();//Obtien y elimina el último elemento
//numeros.shift();//Obtiene y elimina el primer elemento
numeros=[27,...numeros,13];
console.log(numeros);