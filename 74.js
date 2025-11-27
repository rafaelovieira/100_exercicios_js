/* 74 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que contêm a letra "i". */

const palavras = ["eu", "amo", "programar", "JavaScript"]

const contemLetraI = palavras.filter(palavra => 
    palavra.toLowerCase().includes("i")
)
console.log(contemLetraI)