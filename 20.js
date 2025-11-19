/* 20 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne a média dos números do array. */

const numeros = [2, 4, 6, 8, 10]
let soma = 0
let i = 0

while (i < numeros.length) {
    soma += numeros[i]
    i++
}

function calcularMedia(n) {
    return soma / numeros.length
}
console.log(`A média dos números do array é: ${calcularMedia(numeros)}`)