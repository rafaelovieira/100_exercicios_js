/* 16 - Crie um script que declare um array de números e utilize um loop while 
para calcular a soma de todos os números do array. Imprima o resultado. */

const numeros = [2, 3, 5, 7, 11, 13, 17, 19]
let soma = 0
let i = 0

while (i < numeros.length) {
    soma += numeros[i]
    i++
}
console.log(`A soma total dos números do array é: ${soma}`)