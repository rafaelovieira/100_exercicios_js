/* 29 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que começam com a letra "A". */

const palavras = ["Brasil", "alemanha", "Canadá", "Austrália", "EUA"]

const palavrasQueComecamComA = palavras.filter(palavra => palavra.toUpperCase().startsWith("A"))

console.log(palavrasQueComecamComA)