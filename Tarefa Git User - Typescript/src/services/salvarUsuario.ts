import { writeFile } from "node:fs/promises";
import { usuarioGitHub } from "../types/usuarioGitHub";

async function salvarUsuario(
  usuariosAtualizados: usuarioGitHub[],
): Promise<void> {
  await writeFile(
    "./database.json",
    JSON.stringify(usuariosAtualizados, null, 2),
    {
      encoding: "utf-8",
    },
  );
}

export { salvarUsuario };
