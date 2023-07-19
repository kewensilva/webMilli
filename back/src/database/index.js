const Sequelize = require('sequelize');

const configdb = require('../config/database');

const Product = require("../models/Product");
const Category = require('../models/Category');


const connection = new Sequelize(configdb);

Product.init(connection);
Category.init(connection);

module.exports = connection;