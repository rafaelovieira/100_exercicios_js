/* 80 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array contendo apenas os números que são divisíveis por 8. */

const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const divisivelPor8 = numeros.filter(numero =>
    numero % 8 == 0
)
console.log(divisivelPor8)