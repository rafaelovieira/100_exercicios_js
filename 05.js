/*
5 - Crie um script que contenha duas funções, uma usando a sintaxe tradicional e outra usando arrow function. 
Ambas as funções devem receber um parâmetro carreira e retornar uma string concatenada usando template literals ${var}. 
Retorno: "Meu objetivo de carreira é me tornar um [parametro carreira]".
*/

// TRADICIONAL
const carreira = "Desenvolvedor"

function objetivoDeCarreira (objetivo) {
    return `Meu objetivo de carreira é me tornar um ${objetivo}.`
}
console.log(objetivoDeCarreira(carreira))

// ARROW FUNCTION
const carreiraComArrowFunction = "Desenvolvedor"

const objetivoDeCarreiraComArrowFunction = (objetivoComArrowFunction) => {
    return `Meu objetivo de carreira é me tornar um ${objetivoComArrowFunction}.`
}
console.log(objetivoDeCarreiraComArrowFunction(carreiraComArrowFunction))