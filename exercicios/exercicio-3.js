/*1) Criar uma variável booleana(true ou false) informando se o crachá está ativo ou não
2) Criar uma variável numérica com o nível de acesso do funcionário
3) definir condisão onde o funcionário só pode entrar caso tenha crachá e tenha nivel de acesso maior ou igual que 3.
4) e mostrar na tela se acesso permitido ou negado
*/

let cracha = true
let nivelFuncionario = 5

if(cracha === true  && nivelFuncionario >= 3){
	console.log("Acesso liberado")
}else{console.log("Acesso negado")}
