/* 19 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o menor número do array. 
Utilize a função Math.min() para encontrar o menor número. */

const numeros = [14, 70, 1, 49, 28]

function encontrarMenorNumero(n) {
    return Math.min(...n)
}
console.log(`O menor número do array é: ${encontrarMenorNumero(numeros)}`)