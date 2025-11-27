/* 60 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array contendo apenas os números que são divisíveis por 7. */

const numeros = [14, 18, 24, 28, 50, 70]

const divisiveisPor7 = numeros.filter(numero => 
    numero % 7 == 0
)
console.log(divisiveisPor7)