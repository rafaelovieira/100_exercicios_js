/* 96 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array contendo apenas os números que são múltiplos de 9. */

const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const multiploDe9 = numeros.filter(numero =>
    numero % 9 === 0
)
console.log(multiploDe9)