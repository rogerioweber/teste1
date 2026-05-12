/*1) definir uma variavel com o valor do produto quee recebe um valor
2) definir uma variavel frete que recebe um valor
3) definir uma variavel desconto que recebe um valor
4) definir uma variavel ou uma função que vai receber a soma do valor do produto mais frete e que diminui o desconto
5) Mostrar na tela o resultado final do valor do produto
*/

let valorProduto = 150
let frete = 20
let cupomDesconto = 30
let valorFinal = valorProduto + frete - cupomDesconto

console.log(`O valor final do produto é de ${valorFinal} reais`)


function valorFinalProduto(valorProduto, frete = 0, desconto = 0) {
	let saldoFinal = valorProduto + frete - desconto
	return `O valor final do produto é de ${saldoFinal} reais`
}

console.log(valorFinalProduto(150,20,30))
console.log(valorFinalProduto(150, 0,30))
