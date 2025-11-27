/* 62 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que têm exatamente 6 caracteres. */

const frutas = ["Melancia", "Banana", "Uva", "Laranja"]

const stringComSeisCaracteres = frutas.filter(fruta => 
    fruta.length === 6
)
console.log(stringComSeisCaracteres)