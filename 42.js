/* 42 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que têm mais de 5 caracteres. */

const palavras = ["eu", "amo", "programar"]

const stringComMaisDeCincoCaracteres = palavras.filter(palavra => palavra.length > 5)

console.log(stringComMaisDeCincoCaracteres)