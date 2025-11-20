/* 22 - Crie um script que declare um array de números e utilize a função map() para criar um novo array 
onde cada número seja multiplicado por 2. Imprima o novo array. */

const numeros = [0, 3, 6, 9, 12]

const dobroNumeros = numeros.map(numero => numero * 2)

console.log(dobroNumeros)