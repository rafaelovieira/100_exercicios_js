/* 32 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades 
nome, idade e notas (um array de números). Utilize a função map() para criar um novo array contendo apenas os nomes dos alunos. 
Imprima o novo array. */

const alunos = [
    {nome: "João", idade: 17, notas: [7.0, 8.0, 6.5]},
    {nome: "Maria", idade: 22, notas: [7.5, 9.0, 8.5]},
    {nome: "José", idade: 25, notas: [8.0, 6.0, 6.5]},
]

const nomeAlunos = alunos.map(aluno => aluno.nome)

console.log(nomeAlunos)