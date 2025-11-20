/* 31 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades 
nome, idade e notas (um array de números). Utilize um loop for para imprimir o nome de cada aluno. */

const alunos = [
    {nome: "João", idade: 17, notas: [7.0, 8.0, 6.5]},
    {nome: "Maria", idade: 22, notas: [7.5, 9.0, 8.5]},
    {nome: "José", idade: 25, notas: [8.0, 6.0, 6.5]},
]

// LOOP FOR CLÁSSICO
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome)
}

// LOOP FOR OF
for (const aluno of alunos) {
    console.log(aluno.nome)
}