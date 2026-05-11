import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

async function main() {
  const terminalWindow = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  const nome = await terminalWindow.question(
    "Qual é o seu usuário do github? "
  );

  const response = await fetch(
    `https://api.github.com/users/${nome}`
  );

  const json = await response.json();

  console.log(json);

  terminalWindow.close();
}

main();


