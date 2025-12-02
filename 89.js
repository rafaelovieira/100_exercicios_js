/* 89 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string tenha a primeira letra em minúscula e a última letra em maiúscula. 
Utilize a função toLowerCase() e toUpperCase() para converter as letras. */

const palavras = ["Eu", "AMO", "ProGRAmar", "JaVaScRiPt"]

const minusculaMaiuscula = palavras.map(palavra => {
    const primeira = palavra.slice(0, 1).toLowerCase()
    const meio = palavra.slice(1, -1)
    const ultima = palavra.slice(-1).toUpperCase()
    return primeira + meio + ultima
})
console.log(minusculaMaiuscula)