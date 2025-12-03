/* 94 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que contêm a letra "y". */

const linguagens = ["Java", "Javascript", "Python", "C#"]

const contemY = linguagens.filter(linguagem =>
    linguagem.toLowerCase().includes("y")
)
console.log(contemY)