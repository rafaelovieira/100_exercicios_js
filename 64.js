/* 64 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array contendo apenas os números que são maiores que 20. */

const numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

const maioresQue20 = numeros.filter(numero => numero > 20)

console.log(maioresQue20)