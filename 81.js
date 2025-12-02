/* 81 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string tenha a primeira letra em maiúscula e a última letra em minúscula. 
Utilize a função toUpperCase() e toLowerCase() para converter as letras. */

const palavras = ["eu", "AMO", "proGRAmar", "JAVASCRIPT"]

const maiusculaMinuscula = palavras.map(palavra => {
    const primeira = palavra.slice(0, 1).toUpperCase()
    const meio = palavra.slice(1, -1)
    const ultima = palavra.slice(-1).toLowerCase()
    return primeira + meio + ultima
})
console.log(maiusculaMinuscula)