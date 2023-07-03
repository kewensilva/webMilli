const express = require("express");
const cors = require("cors");
const app = express();
const router = require('./routes');

require('./database');

app.use(cors());
app.use(express.json());
app.use(router);
app.use('./src/img/', express.static('./img'));

app.listen(3333);
console.log("Server Iniciado: http://localhost:3333");