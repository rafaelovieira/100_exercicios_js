/* 44 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array contendo apenas os números que são divisíveis por 2. */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const divisiveisPorDois = numeros.filter(numero => numero % 2 == 0)

console.log(divisiveisPorDois)