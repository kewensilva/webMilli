require('../../models/index');
const express = require("express");
const cors = require("cors");
const app = express();

const db = require("../../models/index");
const router = require('../routes/routes');


db.sequelize.sync()
    .then(() => {
        console.log("Database Sincronizado!");
    })
    .catch((err) => {
        console.log("Falha ao tentar Sincronizar Database: " + err.message);
    });

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333);
console.log("Server Iniciado: http://localhost:3333");