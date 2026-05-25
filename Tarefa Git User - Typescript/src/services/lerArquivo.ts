/*
Aqui vou colocar a função ler arquivo que o professor passou
*/

import { readFile } from "node:fs/promises";
import { usuarioGitHub } from "../types/usuarioGitHub";

async function lerArquivo(): Promise<usuarioGitHub[]> {
  try {
    const usuariosText = await readFile("./database.json", {
      encoding: "utf-8",
    });

    const usuarios: usuarioGitHub[] = JSON.parse(usuariosText);

    return usuarios;
  } catch (error) {
    console.error("Arquivo corrompido, não foi possível ler os dados");

    return [];
  }
}

export { lerArquivo };
