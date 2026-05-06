const readlinePromises = require("node:readline/promises");
const { stdin, stdout } = require("process"); //standardIn E standardOut -> entrada padrão e saída padrão

async function main() {
  const terminalWindow = readlinePromises.createInterface({ input: stdin, output: stdout });

  const nome = await terminalWindow.question("Qual é o seu usuário do github?");

  const response = await fetch(`https://api.github.com/users/${nome}`)
  const json = await response.json()

  console.log(json);

  terminalWindow.close();
}

main();
