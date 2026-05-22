// src/index.ts

// Tipagem explícita — boa prática com strict: true
const saudacao = (nome: string): string => {
  return `Olá, ${nome}! Bem-vindo ao TypeScript 6 com Node.js.`;
};

// Interface tipada
interface Usuario {
  id: number;
  nome: string;
  email: string;
  ativo: boolean;
}

// Função assíncrona com tipagem
const buscarUsuario = async (id: number): Promise<Usuario> => {
  // Simulação de uma chamada assíncrona
  return {
    id,
    nome: "Maria Silva",
    email: "maria@exemplo.com",
    ativo: true,
  };
};

// Novidade do TypeScript 6: using para gerenciamento de recursos
// O recurso é limpo automaticamente quando sai do escopo
class ConexaoDB {
  constructor(private url: string) {
    console.log(`Conectando ao banco: ${url}`);
  }

  [Symbol.dispose](): void {
    console.log("Conexão com o banco encerrada automaticamente.");
  }
}

// Função principal
const main = async (): Promise<void> => {
  console.log(saudacao("Desenvolvedor"));

  const usuario = await buscarUsuario(1);
  console.log("Usuário encontrado:", usuario);

  // O using garante que dispose() seja chamado ao sair do bloco
  {
    using conexao = new ConexaoDB("mongodb://localhost:27017/meubanco");
    console.log("Realizando operações no banco...");
    // "conexao" será descartada automaticamente aqui
  }
};

main().catch(console.error);
