/* 59 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array onde cada número seja elevado ao cubo. */

const numeros = [1, 2, 3, 4, 5]

const elevadoAoCubo = numeros.map(numero => numero ** 3)

console.log(elevadoAoCubo)