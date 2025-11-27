/* 65 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string tenha as consoantes removidas. Utilize a função replace() para remover as consoantes. */

const palavras = ["irei", "remover", "as", "consoantes"]

const removendoAsConsoantes = palavras.map(palavra => 
    palavra.replace(/[bcdfghjklmnpqrstvwxyzç]/gi, "")
)

console.log(removendoAsConsoantes)