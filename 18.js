/* 18 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o maior número do array. 
Utilize a função Math.max() para encontrar o maior número. */

const numeros = [14, 70, 1, 49, 28]

function encontrarMaiorNumero(n) {
    return Math.max(...n) // (...n) espalha os elementos do array em argumentos separados
}
console.log(`O maior número do array é: ${encontrarMaiorNumero(numeros)}`)