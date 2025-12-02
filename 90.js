/* 90 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que têm exatamente 9 caracteres. */

const palavras = ["eu", "amo", "programar"]

const com9Caracteres = palavras.filter(palavra =>
    palavra.length === 9
)
console.log(com9Caracteres)