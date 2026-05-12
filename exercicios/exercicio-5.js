/*1) Criei uma variavel Caixa que pode ser mudada todo final do dia
2) criar uma função async igual o exercicio 4, que vai conter variavel venda e despesa que começam em 0.
3) criar uma lista que vai receber os objetos que virão promisse
4) vou criar um laço de repetição que vai percorrer a lista, e que caso a chave for venda vai somar a variavel venda e caso for despesa some com a despesa
5) No final quero mostra o saldo final do dia e mostrar também quanto foi de venda e de despesa
*/

function buscarTransacoesAPI() {
return new Promise(resolve => setTimeout(() => resolve([
{ tipo: "venda", valor: 200 },
{ tipo: "despesa", valor: 50 },
{ tipo: "venda", valor: 100 },
{ tipo: "despesa", valor: 20 }
]), 1500));
}

let caixa = 100

async function caixaFinal() {
	let venda = 0
	let despesa = 0
	const lista = await buscarTransacoesAPI()
	for(let i = 0; i < lista.length; i++){
		if(lista[i].tipo === "venda" ){
			venda += lista[i].valor
		}
		if(lista[i].tipo === "despesa" ){
			despesa += lista[i].valor
		}
	}
	caixa = caixa + venda - despesa
	console.log( `O saldo final é de ${caixa}`)
	console.log(`Você vendeu ${venda} reais`)
	console.log(`Você teve despesa de ${despesa} reais`)
}

caixaFinal()
