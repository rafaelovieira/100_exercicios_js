/* 78 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que contêm a letra "u". */

const palavras = ["eu", "amo", "programar"]

const contemLetraU = palavras.filter(palavra =>
    palavra.toLowerCase().includes("u")
)
console.log(contemLetraU)