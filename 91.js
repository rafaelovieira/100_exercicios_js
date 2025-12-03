/* 91 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array onde cada número seja incrementado em 6. */

const numeros = [1, 2, 3, 4, 5]

const incrementando6 = numeros.map(numero =>
    numero + 6
)
console.log(incrementando6)