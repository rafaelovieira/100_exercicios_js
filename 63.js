/* 63 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array onde cada número seja decrementado em 2. */

const numeros = [1, 2, 3, 4, 5]

const decrementando2 = numeros.map(numero => 
    numero - 2
)
console.log(decrementando2)