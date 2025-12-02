/* 88 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array contendo apenas os números que são ímpares e menores que 20. */

const numeros = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

const numerosImpares = numeros.filter(numero =>
    numero % 2 != 0 && numero > 20
)
console.log(numerosImpares)