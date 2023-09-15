const Sequelize = require('sequelize');

const configdb = require('../config/database');

const Product = require("../models/Product");
const Category = require('../models/Category');
const Image = require('../models/Image');
const AgeGroup = require('../models/AgeGroup');


const connection = new Sequelize(process.env.DB_CONNECTION);

Product.init(connection);
Category.init(connection);
AgeGroup.init(connection);
Image.init(connection);


Product.associate(connection.models);
Image.associate(connection.models);
Category.associate(connection.models);
AgeGroup.associate(connection.models);

module.exports = connection;