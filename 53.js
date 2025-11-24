/* 53 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string tenha as vogais removidas. Utilize a função replace() para remover as vogais. */

const palavras = ["irei", "remover", "todas", "as", "vogais"]

const removendoAsVogais = palavras.map(palavra => {
    return palavra.replace(/[aeiou]/gi, "")})

console.log(removendoAsVogais)