import { mkdir, writeFile } from "node:fs/promises";

async function salvarHistorico() {

const lista = [
    {id: 1, usuario: "Matheus", texto: "olá", data: new Date().toISOString()},
    {id: 2, usuario: "Lucas", texto: "olá", data: new Date().toISOString()}
];

try {
await mkdir(new URL("./data/", import.meta.url), { recursive: true });

const caminhoArquivo = new URL("./data/mensagens-teste.json", import.meta.url);

await writeFile(caminhoArquivo, JSON.stringify(lista, null, 2), "utf8");

console.log("Histórico salvo em ./data/mensagens-teste.json");
  } catch (erro) {
    console.error("Erro ao salvar o arquivo:", erro.message);
  }
}

salvarHistorico();