/*1) Criar uma função assincrona para iniciar o sistema
2) Nessa função colocar um console.log iniciando o sistema e buscando dados
3) logo apos criar uma variavel cliente que vai receber o buscarClienteNoBanco, só que essa função é uma promisse e vai levar 2 segundos para receber a resposta então preciso colocar um await para que só ao receber os dados da função que o cliente vai ser declarado
5) imprimir na tela cliente encontrado com o nome do cliente
6) precisamos iniciar o sistema
*/

function buscarClienteNoBanco() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Maria Silva"), 2000),
  );
}

async function iniciandoSistema() {
  console.log("Iniciando o sitema");
  console.log("Buscando dados...");
  let cliente = await buscarClienteNoBanco();

  console.log(`Cliente encontrado: ${cliente}`);
}

iniciandoSistema();
