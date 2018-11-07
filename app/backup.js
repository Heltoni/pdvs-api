// const config = require('./config/config');
// const datasource =  require('./config/datasource')
const express = require('express');
const app = express();
// const mysql = require('mysql2');
// const repository = require('./respository')

// app.config = config;
// app.datasource = datasource(app);

// localhost:7000
app.listen(7000, () => {
    console.log("Server is up and listening on 7000...")
});

app.get("/", (req, res) => {
    res.send("Listen to port 7000");
});

// app.get("/pdvs/", (req, res) => {    
//     repository.getAll(app, req, res);
// });

// app.get("/pdvs/:id", (req, res) => {    
//     repository.getById(app, req, res);
// });

// app.get("/pdvs/:lng/:lat", (req, res) => {
//     repository.getByCoordinates(app, req, res);
// });


// app.post("/pdvs", (req, res) => {
    
//     const id = req.query.id;
//     const tradingName = req.query.tradingName;
//     const ownerName = req.query.ownerName;
//     const document = req.query.document;
//     const address = req.query.address;
//     const coverageArea = req.query.coverageArea;


//     var query = "insert into pdv(Id, TradingName, OwnerName, Document, Address, CoverageArea ) ";
//     query = query + "values("+ id +", '"+ tradingName +"', '"+ ownerName +"', '"+ document +"', ST_GeomFromGeoJSON('"+address+"'), ST_GeomFromGeoJSON('"+coverageArea+"'))";

//     console.log(query);

//     const connection = mysql.createConnection({
//         host:'localhost',
//         user: 'root',
//         password: 'root',
//         database: 'pdvs-challenge'
//     });
     
//     connection.query(query, (err, rows, fields) => {
//         if(err){
//             console.log(err.message);
//             res.sendStatus(500);
//             return;
//         }       
//     });

//     res.send("Hello from ROOOOOT");

//     return;
//     res.end();
// });

