/* 45 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string esteja em letras maiúsculas e invertida. */

const palavras = ["eu", "amo", "programar"]

const maiusculaInvertida = palavras.map(palavra => {
    return palavra.split('').reverse().join('').toUpperCase()})

console.log(maiusculaInvertida)