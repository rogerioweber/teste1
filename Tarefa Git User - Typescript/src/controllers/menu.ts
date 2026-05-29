/* O meu menu vai precisar de:
- Aparecer o Menu de opções: Solicitar um usuário, Procurar um usuário e Sair(fechar programa)
- No Solicitar o usuário: mostrar que se o usuário não estiver nos dados ai vai salvar. E caso o usuário já esteja nos dados mandar a resposta de que já existe esse usuário.
-No Procurar usuário: ele deve mostrar o nome, o username, e o id.
- E sair vai encerrar o programa
*/

import type { Interface } from "node:readline/promises";
import { writeFile, readFile } from "node:fs/promises";
import { buscarUsuario } from "../services/buscarUsuario";
import { lerArquivo } from "../services/lerArquivo";
import { verEquipe } from "../views/viewEquipe";
import { removerUsuarioDosDados } from "../services/deleteUsuario";
import { salvarUsuario } from "../services/salvarUsuario";

async function menuController(interfaceConsole: Interface): Promise<boolean> {
  console.log("=========================================================\n");
  console.log(
    "                               MENU                              ",
  );
  console.log("=========================================================\n");
  console.log(" INSTRUÇÕES DE USO:");
  console.log(" • Opção 1: Buscar Dev e opção de salvar na equipe ");
  console.log(" • Opção 2: Ver equipe no banco de dados");
  console.log(" • Opção 3: Deletar Dev pelo username");
  console.log(" • Opção 4: Fechar programa");
  console.log("=========================================================\n");

  const opcao = await interfaceConsole.question(
    "Digite o número da opção que deseja:\n",
  );

  switch (opcao) {
    case "1":
      const username = await interfaceConsole.question("Digite o usuário:\n");
      const usuario = await buscarUsuario(username);

      if (!usuario) {
        console.log("Usuário não encontrado");
        await interfaceConsole.question("Pressione enter para voltar ao menu");

        return true;
      }

      const usuariosSalvos = await lerArquivo();

      const usuarioExiste = usuariosSalvos.find(
        (usuarionaLista) => usuario.login === usuarionaLista.login,
      );

      if (usuarioExiste) {
        console.log("Esse usuário já existe nos dados");
        console.log(`Nome: ${usuario.name} \n Login: ${usuario.login}`);
        await interfaceConsole.question("Pressione enter para voltar ao menu");
        return true;
      }

      console.log(`Nome: ${usuario.name} \n Login: ${usuario.login}`);
      const desejaSalvar = await interfaceConsole.question(
        "Caso deseje salvar o usuário digite a palavra sim  \n",
      );
      if (desejaSalvar.toLowerCase() === "sim") {
        usuariosSalvos.push(usuario);

        await salvarUsuario(usuariosSalvos)

        console.log("Usuário salvo com sucesso!");
        await interfaceConsole.question("Pressione enter para voltar ao menu");
        return true;
      }

      console.log("Usuário não foi salvo!");
      await interfaceConsole.question("Pressione enter para voltar ao menu");
      return true;

    case "2":
      await verEquipe();
      await interfaceConsole.question("Pressione enter para voltar ao menu");
      return true;
    case "3":
      const usernameRemover = await interfaceConsole.question(
        "Digite o nome do usuário que deseja remover: \n",
      );

      await removerUsuarioDosDados(usernameRemover);

      await interfaceConsole.question("Pressione enter para voltar ao menu");
      return true;
    case "4":
      return false;

    default: {
      console.log("Opção Inválida!");
      await interfaceConsole.question("Pressione enter para voltar");
      return true;
    }
  };
}

export { menuController };
