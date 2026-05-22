import { lerArquivo } from "../services/lerArquivo.js";

async function verEquipe() {
  console.log("=========================");
  console.log("          EQUIPE         ");
  console.log("=========================");
  const usuarios = await lerArquivo();
  if (usuarios && usuarios.length > 0) {
    usuarios.forEach((usuario) => {
      console.log(`Nome: ${usuario.name ?? ""}`);
      console.log(`Username: ${usuario.login ?? ""}`);
      console.log(`Bio: ${usuario.bio ?? ""}`);
      console.log(`Nº de Repositórios: ${usuario.public_repos ?? ""}`);
      console.log("==========================");
    });
    return;
  }
  console.log("Nenhum integrante na equipe");
}

export { verEquipe };
