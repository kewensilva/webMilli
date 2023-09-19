const Sequelize = require('sequelize');

const configdb = require('../config/database');

const Product = require("../models/Product");
const Category = require('../models/Category');
const Image = require('../models/Image');
const AgeGroup = require('../models/AgeGroup');
const mysql = require('mysql2');

const conn = mysql.createConnection({uri:process.env.DB_CONNECTION})

conn.connect(function(err) {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

const connection = new Sequelize(configdb);

Product.init(connection);
Category.init(connection);
AgeGroup.init(connection);
Image.init(connection);

Product.associate(connection.models);
Image.associate(connection.models);
Category.associate(connection.models);
AgeGroup.associate(connection.models);

module.exports = connection;