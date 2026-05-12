/*1) Definir uma variavel remessa de caixa que vai conter um array de números
2) criar uma função que veja a quantidade total de itens que tem em cada remessa de caixa
3) criar uma variavel itens que começa em 0 e vai aumentando conforme vai passando por cada número da lista
4) criar um laço de repetição que vai passando por cada valor da lista e vai aumentando a contagem dos itens
5) Mostrar a quantidade de itens que chegou no armazém
6) Extra: criei uma variavel chamada estoque que começa em 0, mas pode receber qualquer valor, e cada vez que chega nova remessa a quantidade de itens soma com a quantidade que tem em estoque.
*/

let estoque = 100;
let remessaCaixas = [10, 25, 5, 12, 8];
let remessaCaixas2 = [30, 30, 30, 30];

function quantidadeItens(lista) {
  let itens = 0;
  for (let i = 0; i < lista.length; i++) {
    itens += lista[i];
  }
  estoque += itens;
  return `Chegou no armazém ${itens} itens, e o total no estoque é de ${estoque} itens`;
}

console.log(quantidadeItens(remessaCaixas));
console.log(quantidadeItens(remessaCaixas2));
