/* 98 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que contêm a letra "z". */

const animais = ["cachorro", "cavalo", "zebra"]

const contemLetraZ = animais.filter(animal =>
    animal.toLowerCase().includes("z")
)
console.log(contemLetraZ)