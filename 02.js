/* 2 - Crie um script que simule um sistema de registro de produtos. O script deve ter três variáveis:
  var produto;
  let categoria;
  const codigoProduto;
As variáveis produto e codigoProduto devem estar em um escopo global. A variável categoria deve estar dentro de uma função. 
A execução do programa deve imprimir os detalhes do produto na ordem correta (com quebra de linha): 
Produto Categoria Código do Produto. */

var produto = "café"
const codigoProduto = 123456

function exibirCategoriaProduto() {
  let categoria = "bebida"
  return categoria
}
console.log(`Produto: ${produto}\nCategoria: ${exibirCategoriaProduto()}\nCódigo do Produto: ${codigoProduto}`)