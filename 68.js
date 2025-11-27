/* 68 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array contendo apenas os números que são ímpares e maiores que 15. */

const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const imparMaiorQue15 = numeros.filter(numero => numero % 2 != 0 && numero > 15)

console.log(imparMaiorQue15)