const config = require('./config/config');
const datasource =  require('./config/datasource')
const express = require('express');
const app = express();
const repository = require('./respository')
const mysql = require('mysql2');

app.config = config;
app.datasource = datasource(app);

// Começar a ouvir a porta 7000
app.listen(7000, () => {
    console.log("Server is up and listening on 7000...")
});

//chamada em http://localhost:7000, verificação do status da api.
app.get("/", (req, res) => {
    res.send("Listening to port 7000");
});

//Rota para listar todos os PDVS
app.get("/pdvs/", (req, res) => {    
    repository.getAll(app, req, res);
});

//Rota para listar obter um pdv por id
app.get("/pdvs/:id", (req, res) => {    
    repository.getById(app, req, res);
});

//Rota para obter o pdv mais próximo que e cubra a coordenada passada como parametro
app.get("/pdvs/:lng/:lat", (req, res) => {
    repository.getByCoordinates(app, req, res);
});

//Rota para inserção de um novo pdv (todos os campos obrigatórios)
app.post("/pdvs", (req, res) => {
    repository.postPdv(app, req, res); 
});

