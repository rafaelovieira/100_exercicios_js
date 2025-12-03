/* 100 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array contendo apenas os números que são divisíveis por 10. */

const numeros = [10, 15, 20 ,25, 30, 35, 40, 45, 50]

const divisivelPor10 = numeros.filter(numero =>
    numero % 10 === 0
)
console.log(divisivelPor10)