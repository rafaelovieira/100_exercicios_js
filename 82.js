/* 82 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que têm exatamente 8 caracteres. */

const frutas = ["melancia", "uva", "banana"]

const com8Caracteres = frutas.filter(fruta =>
    fruta.length === 8
)
console.log(com8Caracteres)