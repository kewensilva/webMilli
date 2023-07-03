const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

const Product = require("../models/Product.js");
const Category = require("../models/Category.js");
const AgeGroup = require("../models/AgeGroup.js");

const connection = new Sequelize(dbconfig);

AgeGroup.init(connection);
Category.init(connection);
Product.init(connection);


// connection.products = require("./Product.js")(sequelize, Sequelize)
// connection.Categories = require("./Category.js")(sequelize, Sequelize)
// connection.AgeGroup = require("./AgeGroup.js")(sequelize, Sequelize)


module.exports = connection;