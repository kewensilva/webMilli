const express = require('express');
const cors = require("cors");
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

require("./database");

const app = express();
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-key');

  next();
});
app.use(routes);
app.use('/files', express.static(__dirname + '/public' + '/uploads'));


app.listen(PORT, () => {
  console.log("server iniciado! na porta:" + process.env.PORT);
});
