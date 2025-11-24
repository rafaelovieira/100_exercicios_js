/* 58 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que contêm a letra "o". */

const palavras = ["eu", "amo", "programar"]

const contemLetraO = palavras.filter(palavra => palavra.includes("o"))

console.log(contemLetraO)