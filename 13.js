/* 13 - Crie um script que declare uma variável var largura e atribua a ela um valor numérico. 
Declare uma função que calcule a largura ao cubo e imprima o resultado. */

var largura = 12

const calcularAoCubo = (medida) => {
    return (medida * medida * medida)
}
console.log(calcularAoCubo(largura).toFixed(2))