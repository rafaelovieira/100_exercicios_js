/* 93 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string tenha as vogais triplicadas. Utilize a função replace() para triplicar as vogais. */

const palavras = ["eu", "amo", "programar"]

const triplicarVogais = palavras.map(palavra => 
    palavra.replace(/[aeiou]/gi, (vogal) => {
        return vogal + vogal + vogal
    })
)
console.log(triplicarVogais)