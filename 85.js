/* 85 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string tenha as consoantes duplicadas. Utilize a função replace() para duplicar as consoantes. */

const palavras = ["eu", "amo", "programar"]

const duplicandoConsoantes = palavras.map(palavra =>
    palavra.replace(/[bcdfghjklmnpqrstvwxyzç]/gi, (consoante) => {
        return consoante + consoante
    })
)
console.log(duplicandoConsoantes)