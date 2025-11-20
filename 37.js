/* 37 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string esteja invertida. Utilize a função reverse() para inverter as strings. */

const palavras = ["eu", "amo", "programar"]

const stringsInventidas = palavras.map(palavra => {
    return palavra.split('').reverse().join('')})
    // .split('') transforma a string em um array
    // .reverse() inverte a ordem
    // .join('')  transforma o array invertido em uma string
    // .map() garante a aplicação em todas as strings do array
    
console.log(stringsInventidas)