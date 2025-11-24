/* 57 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string esteja em letras minúsculas e invertida. */

const palavras = ["EU", "AMO", "PROGRAMAR"]

const minusculaInvertida = palavras.map(palavra => {
    return palavra.split('').reverse().join('').toLowerCase()})

    console.log(minusculaInvertida)