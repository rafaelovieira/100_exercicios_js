/* 12 - Crie um script que declare uma variável let altura e atribua a ela um valor numérico. 
Em seguida, declare uma função que calcule a altura ao quadrado e imprima o resultado. */

let altura = 1.82

const calcularAoQuadrado = (medida) => {
    return (medida * medida)
}
console.log(calcularAoQuadrado(altura).toFixed(2))