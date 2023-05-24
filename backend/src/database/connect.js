require("dotenv").config();
const mysql = require ("mysql");

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

db.connect(function(err){
    if (err) throw err;
    console.log("Conectado ao Banco de Dados!");
})

module.exports = db;