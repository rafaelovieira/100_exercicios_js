/* 69 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string tenha a primeira e a última letra em minúscula. 
Utilize a função toLowerCase() para converter as letras. */

const palavras = ["EU", "AMO", "PROGRAMAR"]

const primeiraUltimaMinuscula = palavras.map(palavra => {
    const primeira = palavra.slice(0, 1).toLowerCase()
    const meio = palavra.slice(1, -1)
    const ultima = palavra.slice(-1).toLowerCase()
    return primeira + meio + ultima
})
console.log(primeiraUltimaMinuscula)