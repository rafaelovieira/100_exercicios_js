/* 7 - Crie um script que combine o uso de objetos literais, arrays e cálculos simples para armazenar e manipular informações pessoais e acadêmicas de uma pessoa. 
O script deve realizar as seguintes tarefas:
    nome: O nome do aluno.
    cpf: O CPF do aluno.
    cidade: A cidade onde o aluno mora.
    notas: Um array com 4 notas do aluno. 
Imprima o nome, CPF e cidade do aluno. 
Imprima cada uma das notas do array notas. 
Calcule a média das notas do aluno e imprima. 
Selecione uma das notas aleatoriamente, convertê-la de uma escala de 0-10 para uma escala de 0-100 (nota convertida = nota × 10). Utilize a sintaxe notas[Math.floor(Math.random() * notas.length)] para selecionar uma nota aleatória do array. 
Utilize template literals para a concatenação de strings. */ 

let aluno = {
    nome: "Rafael",
    cpf: "123.123.123-12",
    cidade: "João Pessoa",
    notas: [8.5, 9.0, 7.0, 6.5]
}

const calcularMedia = (notas) => {
    return (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
}

const notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)]

const notaConvertida = notaAleatoria * 10

console.log(`Aluno: ${aluno.nome}`)
console.log(`CPF: ${aluno.cpf}`)
console.log(`Cidade: ${aluno.cidade}\n`)
console.log(`Nota 1: ${aluno.notas[0]}`)
console.log(`Nota 2: ${aluno.notas[1]}`)
console.log(`Nota 3: ${aluno.notas[2]}`)
console.log(`Nota 4: ${aluno.notas[3]}`)
console.log(`A média do aluno foi: ${calcularMedia(aluno.notas).toFixed(1)}`)
console.log(`Das notas do aluno sorteamos a nota: ${notaAleatoria} e convertendo ela para a escala de 0-100: ${notaConvertida}`)