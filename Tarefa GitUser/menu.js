/* O meu menu vai precisar de:
- Aparecer o Menu de opções: Solicitar um usuário, Procurar um usuário e Sair(fechar programa)
- No Solicitar o usuário: mostrar que se o usuário não estiver nos dados ai vai salvar. E caso o usuário já esteja nos dados mandar a resposta de que já existe esse usuário.
-No Procurar usuário: ele deve mostrar o nome, o username, e o id.
- E sair vai encerrar o programa
*/

import { stdin, stdout } from "process";
import { createInterface } from "node:readline/promises";
import { writeFile, readFile } from "node:fs/promises";
import { buscarUsuario } from "./services/buscarUsuario.js";
import { lerArquivo } from "./services/lerArquivo.js";
import { verEquipe } from "./views/viewEquipe.js";
import { removerUsuarioDosDados } from "./services/delete.js";

async function mainMenu() {
  const interfaceConsole = createInterface(stdin, stdout);

  let programaRodando = true;

  try {
    while (programaRodando) {
      
      console.log(
        "=========================================================\n",
      );
      console.log(
        "                               MENU                              ",
      );
      console.log(
        "=========================================================\n",
      );
      console.log(" INSTRUÇÕES DE USO:");
      console.log(" • Opção 1: Buscar Dev e opção de salvar na equipe ");
      console.log(" • Opção 2: Ver equipe no banco de dados");
      console.log(" • Opção 3: Deletar Dev pelo username");
      console.log(" • Opção 4: Fechar programa");
      console.log(
        "=========================================================\n",
      );

      const opcao = await interfaceConsole.question(
        "Digite o número da opção que deseja:\n",
      );

      switch (opcao) {
        case "1":
          const username = await interfaceConsole.question(
            "Digite o usuário:\n",
          );
          const usuario = await buscarUsuario(username);
          // console.log(usuario) aqui to recebendo o usuario
          const usuariosSalvos = await lerArquivo();

          const usuarioExiste = usuariosSalvos.find(
            (usuarionaLista) => usuario.login === usuarionaLista.login,
          );

          if (usuarioExiste) {
            console.log("Esse usuário já existe nos dados");
            console.log(`Nome: ${usuario.name} \n Login: ${usuario.login}`);
            await interfaceConsole.question(
                "Pressione enter para voltar ao menu",
              );
            break;
          }

          console.log(`Nome: ${usuario.name} \n Login: ${usuario.login}`);
          const desejaSalvar = await interfaceConsole.question(
            "Caso deseje salvar o usuário digite a palavra sim  \n",
          );
          if (desejaSalvar.toLowerCase() === "sim") {
            usuariosSalvos.push(usuario);

            await writeFile("./database.json", JSON.stringify(usuariosSalvos), {
              encoding: "utf-8",
            });

            console.log("Usuário salvo com sucesso!");
            await interfaceConsole.question(
                "Pressione enter para voltar ao menu",
              );
            break;
          }

          console.log("Usuário não foi salvo!");
          break;

        case "2":
          await verEquipe();
          await interfaceConsole.question("Pressione enter para voltar ao menu");
          break;
        case "3":
          const usernameRemover = await interfaceConsole.question(
            "Digite o nome do usuário que deseja remover: \n",
          );

          await removerUsuarioDosDados(usernameRemover);

         await interfaceConsole.question(
                "Pressione enter para voltar ao menu"
              );
          break;
        case "4":
          programaRodando = false
          break;
        default: {
          console.log("Opção Inválida!");
        }
      }
    }
  } catch (erro) {
    console.log(`Ocorreu erro de ${erro}`);
  } finally {
    console.log("Encerrando o programa");
    interfaceConsole.close();
    console.log("Programa finalizado");
  }
}

mainMenu();

