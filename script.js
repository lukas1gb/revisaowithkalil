// 1. Chamando o "telefone" do Node para conseguir ouvir a internet
const http = require('http');

// 2. Criando o servidor (O Atendente)
const server = http.createServer((req, res) => {

    // req (Request) = O que o usuário PEDE na URL
    // res (Response) = O que nós RESPONDEMOS para a tela dele

    if (req.url === '/banana') {
        res.end('<h1> naoseibanana </h1>');
    }

    else {
        res.end('Ops... Rota nao encontrada.');
    }


});

// 3. Ligando o servidor na tomada (Porta 8080)
server.listen(8080, () => {
    console.log('Servidor ON! Porta 8080');
});






