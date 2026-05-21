
import { stdin, stdout } from "process";
import { createInterface } from "node:readline/promises";
import { writeFile, readFile } from "node:fs/promises";
import { lerArquivo } from "./lerArquivo.js";

async function removerUsuarioDosDados(username) {
  const usuarios = await lerArquivo();
  if (usuarios) {
    const index = usuarios.findIndex((usuario) => {
      return usuario.login.toUpperCase() === username.toUpperCase();
    });

    if (index !== -1) {
      usuarios.splice(index, 1);
      await writeFile(`./database.json`, JSON.stringify(usuarios), {
        encoding: "utf-8",
      });
      console.log("Usuário removido com sucesso!");
      return;
    }
    console.log("Usuário não encontrado");
    return;
  }
}

export {removerUsuarioDosDados}
