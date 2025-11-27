/* 77 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string tenha todas as letras em maiúscula e invertida. */

const palavras = ["eu", "amo", "programar"]

const invertidaMaiscula = palavras.map(palavra => {
    return palavra.toUpperCase().split('').reverse().join('')
})
console.log(invertidaMaiscula)