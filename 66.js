/* 66 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que começam com a letra "C". */

const frutas = ["Cajá", "Banana", "cajú", "Laranja"]

const stringsQueComecamComC = frutas.filter(fruta => 
    fruta.toLocaleUpperCase().startsWith("C")
)
console.log(stringsQueComecamComC)