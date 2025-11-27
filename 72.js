/* 72 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array contendo apenas os números que são menores que 30. */

const numeros = [10, 15, 20, 25, 30, 35, 40, 45, 50]

const menoresQue30 = numeros.filter(numero => 
    numero < 30
)
console.log(menoresQue30)