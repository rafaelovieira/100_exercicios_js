/* 56 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array contendo apenas os números que são múltiplos de 4. */

const numeros = [10, 20, 30, 40, 50]

const multiplosDe4 = numeros.filter(numero => numero % 4 == 0)

console.log(multiplosDe4)