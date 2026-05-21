/*Aqui no buscar usuário tenho que colocar a parte que vai buscar no API, caso não consiga encontra o usuário ou falhe, o programa deve mostrar o erro  ao usuário
 */

import { stdin, stdout } from "process";
import { createInterface } from "node:readline/promises";
import { writeFile, readFile } from "node:fs/promises";

async function buscarUsuario(username) {
  const urlBase = "https://api.github.com/users/";

  try {
    const response = await fetch(`${urlBase}${username}`);

    if (!response.ok) {
      throw new Error("Deu erro em buscar usuário!");
    }

    const body = await response.json();

    return body;
  } catch (error) {
    console.log(error);
  }
}

export { buscarUsuario };
