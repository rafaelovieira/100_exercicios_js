/* 41 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array 
onde cada string tenha a primeira letra em maiúscula. Utilize a função toUpperCase() para converter a primeira letra. */

const palavras = ["eu", "amo", "programar"]

const primeiraLetraDaStringMaiuscula = palavras.map(
    palavra => {
        const primeira = palavra[0].toUpperCase()
        const restante = palavra.slice(1)
        return primeira + restante
    }
)
console.log(primeiraLetraDaStringMaiuscula)