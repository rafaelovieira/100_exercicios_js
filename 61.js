/* 61 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string tenha a primeira e a última letra em maiúscula. 
Utilize a função toUpperCase() para converter as letras. */

const palavras = ["eu", "amo", "programar"]

const primeiraEUltimaLetraMaiuscula = palavras.map(palavra => {
    const primeira = palavra.slice(0, 1)
    const meio = palavra.slice(1, -1)
    const ultima = palavra.slice(-1)
    return primeira.toUpperCase() + meio + ultima.toUpperCase()})

console.log(primeiraEUltimaLetraMaiuscula)