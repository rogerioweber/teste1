import { usuarioGitHub } from "../types/usuarioGitHub";

function validarUsuarioGitHub(body: unknown): body is usuarioGitHub {
  if (typeof body !== "object" || body === null) {
    return false;
  }

  const usuario = body as usuarioGitHub;

  return (
    typeof usuario.login === "string" &&
    (typeof usuario.name === "string" || usuario.name === null) &&
    (typeof usuario.bio === "string" || usuario.bio === null) &&
    (typeof usuario.public_repos === "number" || usuario.public_repos === null)
  );
}

export { validarUsuarioGitHub };
