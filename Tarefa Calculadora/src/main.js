import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { adicao } from "./services/adicao.js";
import { subtracao } from "./services/subtracao.js";
import { multiplicacao } from "./services/multiplicacao.js";
import { divisao } from "./services/divisao.js";

async function main() {
  function fechandoTerminal(){
    return interfaceConsole.close();
  }

  const interfaceConsole = createInterface(stdin, stdout);

  const respostaOperacao = await interfaceConsole.question(
    "Digite uma das operações (+ - * / ):\n",
  );

 if (respostaOperacao !== "+" &&
    respostaOperacao !== "-" &&
    respostaOperacao !== "*" &&
    respostaOperacao !== "/"
){
  fechandoTerminal()
  throw new Error("Operação inválida. Encerrando programa");
}

  const aString = await interfaceConsole.question(
    "Digite o primeiro número:\n",
  );
  const a = Number(aString);
  if (isNaN(a)) {fechandoTerminal()
    throw new Error("Erro, precisa digitar um número. Encerrando o programa");}

  const bString = await interfaceConsole.question("Digite o segundo número:\n");
  const b = Number(bString);
  if (isNaN(b)) {fechandoTerminal()
    throw new Error("Erro, precisa digitar um número. Encerrando o programa");}

  let resposta = null
  switch (respostaOperacao) {
    case "+":
      resposta = adicao(a, b);
      console.log(`${a} + ${b} = ${resposta} `);
      break;
    case "-":
      resposta = subtracao(a, b);
      console.log(`${a} - ${b} = ${resposta} `);
      break;
    case "*":
      resposta = multiplicacao(a, b);
      console.log(`${a} x ${b} = ${resposta} `);
      break;
    case "/":
      resposta = divisao(a, b);
      console.log(`${a} / ${b} = ${resposta} `);
      break;
    default:{ fechandoTerminal()
      throw new Error("Não suportamos essa operação");
  }}

  fechandoTerminal();
}

main().catch(console.log);
