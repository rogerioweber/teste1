import { writeFile } from "node:fs/promises";
import { lerArquivo } from "./lerArquivo.js";
import type { usuarioGitHub } from "../types/usuarioGitHub.js";

async function removerUsuarioDosDados(username: string): Promise<void> {
  try {
    const usuarios = await lerArquivo()

    if (!usuarios) {
      console.log("Não foi possível ler os usuários.");
      return;
    }

    const index = usuarios.findIndex(
      (usuario: usuarioGitHub) => usuario.login.toUpperCase() === username.toUpperCase(),
    );

    if (index === -1) {
      console.log("Usuário não encontrado.");
      return;
    }

    usuarios.splice(index, 1);

    await writeFile("./database.json", JSON.stringify(usuarios, null, 2), {
      encoding: "utf-8",
    });

    console.log("Usuário removido com sucesso!");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

export { removerUsuarioDosDados };
