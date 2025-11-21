/* 47 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array onde cada número seja multiplicado por 10. */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const multiplicandoPorDez = numeros.map(numero => numero * 10)

console.log(multiplicandoPorDez)