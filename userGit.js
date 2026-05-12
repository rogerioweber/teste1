import readlinePromises from "node:readline/promises";
import { stdin, stdout } from "process";

async function userGit() {
  const terminalWindow = readlinePromises.createInterface({
    input: stdin,
    output: stdout,
  });

  const nome = await terminalWindow.question(
    "Qual é o seu usuário do github? ",
  );

  const response = await fetch(`https://api.github.com/users/${nome}`);

  const json = await response.json();

  console.log(json);

  terminalWindow.close();
}

userGit();
