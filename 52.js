/* 52 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array contendo apenas os números que são menores que 50. */

const numeros = [20, 90, 50, 10, 60, 100]

const numerosMenoresQue50 = numeros.filter(numero => numero < 50)

console.log(numerosMenoresQue50)