/* 97 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string tenha todas as letras em maiúscula e invertida. */

const palavras = ["eu", "amo", "programar"]

const maiusculaInvertida = palavras.map(palavra =>
    palavra.toLocaleUpperCase().split('').reverse().join('')
)
console.log(maiusculaInvertida)