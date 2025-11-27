/* 70 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que têm mais de 7 caracteres. */

const palavras = ["eu", "amo", "programar"]

const maisDe7Caracteres = palavras.filter(palavra => palavra.length > 7)

console.log(maisDe7Caracteres)