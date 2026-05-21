/*
Aqui vou colocar a função ler arquivo que o professor passou
*/

import { stdin, stdout } from "process";
import { createInterface } from "node:readline/promises";
import { writeFile, readFile } from "node:fs/promises";
import { buscarUsuario } from "./buscarUsuario.js";

async function lerArquivo() {
  try {
    const usuariosText = await readFile("./database.json", {
      encoding: "utf-8",
    });
    return JSON.parse(usuariosText);
  } catch (error) {
    console.error("Arquivo corrompido, não foi possível ler os dados");
  }
}

export { lerArquivo };
