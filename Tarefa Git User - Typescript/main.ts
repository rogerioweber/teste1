import { stdin, stdout } from "process";
import { createInterface } from "node:readline/promises";
import { menuController } from "./controllers/menu.js";

async function main() {
  let rodando = true;

  const interfaceConsole = createInterface(stdin, stdout);

  try {
    while (rodando) {
      rodando = await menuController(interfaceConsole);
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Encerrando programa...");

    interfaceConsole.close();

    console.log("Programa finalizado.");
  }
}

main();
