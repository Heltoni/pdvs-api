const mysql = require('mysql2');

let connection = null;

module.exports = (app) =>{
    
    if(!connection){
        const config = app.config;

        connection = mysql.createConnection({
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database
        });
    }

    return connection;
}