/* 35 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array onde cada número seja decrementado em 1. */

const numeros = [1, 3, 5, 7, 9]

const decrementandoNumero = numeros.map(numero => numero - 1)

console.log(decrementandoNumero)