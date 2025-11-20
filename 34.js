/* 34 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades 
nome, idade e notas (um array de números). Utilize a função reduce() para calcular a média das idades dos alunos. Imprima o resultado. */

const alunos = [
    {nome: "João", idade: 17, notas: [7.0, 8.0, 6.5]},
    {nome: "Maria", idade: 22, notas: [7.5, 9.0, 8.5]},
    {nome: "José", idade: 25, notas: [8.0, 6.0, 6.5]},
]

const mediaIdades = alunos.reduce((total, idade) => {return total + idade.idade}, 0) / alunos.length

console.log(mediaIdades.toFixed(2))