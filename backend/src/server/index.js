const express = require("express");
const cors = require("cors");
const db = require("../database/connect");
const app = express();

const CategoryRoutes = require("../routes/routes.js");

app.use(cors());
app.use(express.json());
app.use(CategoryRoutes);

app.listen(3333);
console.log("Server Iniciado: http://localhost:3333");
db;