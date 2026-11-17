const historicoMensagens = [
    {id: 1, usuario: 'Lara', texto:'Olá, mundo.'},
    {id: 2, usuario:'Davi', texto: 'Olá, universo'}
];

const conteudoSalvar = JSON.stringify(historicoMensagens, null, 2);
console.log(conteudoSalvar);
console.log("Tipo da variável:", typeof conteudoSalvar);

//exercicio 1.2
const jsonValido = '[{"id": 10, "usuario": "Lucas", "texto": "Teste"}]';
const mensagens = JSON.parse(jsonValido);
console.log("Texto da primeira mensagem:", mensagens[0].texto);
const jsonQuebrado = '[{ id: 10, quebrado: sim ';

try{
    const dadosCorrompidos = JSON.parse(jsonQuebrado);
    console.log("Sucesso na leitura:", dadosCorrompidos);
} catch (erro) {

console.error("Alerta: JSON corrompido! Detalhes:", erro.message);
}
console.log("O código continua funcionando mesmo após o erro de JSON corrompido.");

