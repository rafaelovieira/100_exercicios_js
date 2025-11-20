/* 38 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que terminam com a letra "a". */

const palavras = ["Java", "JavaScript", "Python", "HTML"]

const palavrasQueTerminamComA = palavras.filter(palavra => palavra.toUpperCase().endsWith("A"))

console.log(palavrasQueTerminamComA)