/* 49 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string tenha a última letra em maiúscula. Utilize a função toUpperCase() para converter a última letra. */

const palavras = ["eu", "amo", "programar"]

const ultimaLetraMaiuscula = palavras.map(palavra => {
    const inicio = palavra.slice(0, -1)
    const ultimo = palavra[palavra.length - 1]   // palavra.at(-1).toUpperCase()
    return inicio + ultimo.toUpperCase()})

console.log(ultimaLetraMaiuscula)