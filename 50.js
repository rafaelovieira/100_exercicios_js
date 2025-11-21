/* 50 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que têm exatamente 4 caracteres. */

const palavras = ["eu", "amo", "programar", "em", "Java"]

const stringComQuatroCaracteres = palavras.filter(palavra => {
    return palavra.length === 4})

console.log(stringComQuatroCaracteres)