/* 92 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array contendo apenas os números que são menores que 35. */

const numeros = [10, 20, 30, 40, 50]

const menorQue35 = numeros.filter(numero =>
    numero < 35
)
console.log(menorQue35)