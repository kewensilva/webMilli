const express = require('express');
const cors = require("cors");
const path = require("path");
const routes = require('./routes');

require("./database");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(__dirname + '/public' + '/uploads'));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Acess-Control-Allow-methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.listen(3333);

