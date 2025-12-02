/* 86 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que começam com a letra "D". */

const paises = ["Brasil", "EUA", "Dinamarca"]

const comecaComD = paises.filter(pais =>
    pais.slice(0, 1) === "D"
)
console.log(comecaComD)