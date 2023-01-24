const express = require('express');

const path = require('path');

const recursoDeConsulta = require('./controllers/recursoController');           //importando controladores

const api = express();

const caminhoAbsoluto = __dirname;                      //definição do caminho absoluto 
api.set("views", path.join(caminhoAbsoluto, "views"));  //para conseguir acessar a pasta

api.set("view engine", "ejs");                          //configuração do ejs

api.get('/', (req, res) => {                                
    res.send('Resposta à requisição do View')
})

api.get('/home', (req, res) => {
    res.sendFile('./views/home')
});

api.get('/inicio', (req, res) => {
    res.sendFile(path.join(caminhoAbsoluto, 'views/home.html'))
});


api.get('/tela/colaboradores', (req, res) => {
    res.render('colaboradores')
});

api.listen('3333', () => {                              //definição da porta do servidor
    console.log('Servidor rodando porta 3333')
});
