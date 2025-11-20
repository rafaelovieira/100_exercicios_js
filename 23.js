/* 23 - Crie um script que declare um array de números e utilize a função reduce() para calcular a soma de todos os números do array. 
Imprima o resultado. */

const numeros = [2, 4, 6, 8, 10]

const soma = numeros.reduce((total, numero) => total + numero, 0)

console.log(`A soma dos números do array é: ${soma}`)