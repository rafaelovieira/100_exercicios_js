/* 1 - Crie um script que tenha três variáveis: 
    var nome;
    let sobreNome;
    const cpf;
nome e cpf devem estar em um escopo global. sobreNome deve estar dentro de uma função. 
A execução do programa deve imprimir o nome completo na ordem correta (com quebra de linha): Nome Sobrenome CPF. 
Outra linha com uma mensagem concatenando os valores */

var nome = "Rafael"
const cpf = "123.123.123-12"

function exibirSobrenome() {
    let sobrenome = "Vieira"
    return sobrenome
} 
console.log(`${nome} ${exibirSobrenome()} ${cpf}\n`)
console.log(`Nome completo: ${nome} ${exibirSobrenome()}. CPF: ${cpf}`)