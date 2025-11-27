/* 73 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string tenha as vogais duplicadas. Utilize a função replace() para duplicar as vogais. */

const palavras = ["eu", "amo", "programar"]

const duplicandoAsVogais = palavras.map(palavra =>
    palavra.replace(/[aeiou]/gi, (vogal) => {
        return vogal + vogal
    })
)
console.log(duplicandoAsVogais)