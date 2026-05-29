/*Aqui no buscar usuário tenho que colocar a parte que vai buscar no API, caso não consiga encontra o usuário ou falhe, o programa deve mostrar o erro  ao usuário
 */

import { usuarioGitHub } from "../types/usuarioGitHub";
import { validarUsuarioGitHub } from "../validators/usuarioGitHubValidator";

async function buscarUsuario(username: string): Promise<usuarioGitHub | null> {
  const urlBase = "https://api.github.com/users/";

  try {
    const response = await fetch(`${urlBase}${username}`);

    if (!response.ok) {
      throw new Error("Deu erro em buscar usuário!");
    }

    const body: unknown = await response.json();
    if (!validarUsuarioGitHub(body)) {
      throw new Error("Resposta inválida da API");
    }

    return body;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { buscarUsuario };
