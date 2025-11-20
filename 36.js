/* 36 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array contendo apenas os números que são múltiplos de 5. */

const numeros = [1, 3, 5, 6, 10, 12, 15, 18, 20]

const multiplosDeCindo = numeros.filter(numero => numero % 5 == 0)

console.log(multiplosDeCindo)