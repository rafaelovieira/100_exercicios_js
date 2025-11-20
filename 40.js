/* 40 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array contendo apenas os números que são maiores que 10. */

const numeros = [10, 7, 15, 9, 22, 30]

const numerosMaioresQueDez = numeros.filter(numero => numero > 10)

console.log(numerosMaioresQueDez)