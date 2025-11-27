/* 79 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array onde cada número seja multiplicado por 7. */

const numeros = [1, 2, 3, 4, 5]

const multiplicandopor7 = numeros.map(numero =>
    numero * 7
)
console.log(multiplicandopor7)