/* 46 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que contêm a letra "e". */

const palavras = ["eu", "amo", "programar"]

const stringQueContemLetraE = palavras.filter(palavra => {
    return palavra.toLowerCase().includes("e")})

console.log(stringQueContemLetraE)