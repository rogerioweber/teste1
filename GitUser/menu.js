/* O meu menu vai precisar de:
- Aparecer o Menu de opções: Solicitar um usuário, Procurar um usuário e Sair(fechar programa)
- No Solicitar o usuário: mostrar que se o usuário não estiver nos dados ai vai salvar. E caso o usuário já esteja nos dados mandar a resposta de que já existe esse usuário.
-No Procurar usuário: ele deve mostrar o nome, o username, e o id.
- E sair vai encerrar o programa
*/

import { stdin, stdout } from "process";
import { createInterface } from "node:readline/promises";
import { writeFile, readFile } from "node:fs/promises";
import { buscarUsuario } from "./buscarUsuario.js";
import { lerArquivo } from "./lerArquivo.js";

async function mainMenu() {
  const interfaceConsole = createInterface(stdin, stdout);

  try {
    console.log("\n_______________________________________________________\n ");
    console.log("=========================================================\n");
    console.log(
      "                               MENU                              ",
    );
    console.log("=========================================================\n");
    console.log(" INSTRUÇÕES DE USO:");
    console.log(
      " • Opção 1: Solicitar Usuário do Github, caso não esteja nos dados poderá salvar ",
    );
    console.log(" • Opção 2: Procurar Usuário no banco de dados");
    console.log(" • Opção 3: Fechar programa");
    console.log("=========================================================\n");

    const opcao = await interfaceConsole.question(
      "Digite o número da opção que deseja:\n",
    );

    switch (opcao) {
      case "1":
        const username = await interfaceConsole.question("Digite o usuário:\n");
        const usuario = await buscarUsuario(username);
        // console.log(usuario) aqui to recebendo o usuario
        const usuariosSalvos = await lerArquivo();

        const usuarioExiste = usuariosSalvos.find(
          (usuarionaLista) => usuario.login === usuarionaLista.login,
        );

        if (usuarioExiste) {
          console.log("Esse usuário já existe nos dados");
          console.log(`Nome: ${usuario.name} \n Login: ${usuario.login}`);
          return;
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
          return;
        }

        console.log("Usuário não foi salvo!");
        return;

      case "2":
        const findUserName = await interfaceConsole.question(
          "Digite o usuário:\n",
        );
        const usuariosSalvos2 = await lerArquivo();

        const usuarioEncontrado = usuariosSalvos2.find(
          (usuarionaLista) => findUserName === usuarionaLista.login,
        );

        if (!usuarioEncontrado) {
          console.log("Usuário não está nos dados");
          return;
        }

        console.log("Usuário encontrado");
        console.log(
          `Nome: ${usuarioEncontrado.name} \n Login: ${usuarioEncontrado.login}`,
        );
        return;

      case "3":
        return;
      default: {
        console.log("Opção Inválida!");
        interfaceConsole.close();
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
