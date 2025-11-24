/* 54 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que começam com a letra "B". */

const frutas = ["Melancia", "Maçã", "Banana", "Uva", "Abacate"]

const frutasComALetraB = frutas.filter(fruta => fruta.toUpperCase().startsWith("B"))

console.log(frutasComALetraB)