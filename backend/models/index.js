const dbconfig = require("../config/database.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbconfig.development.database, dbconfig.development.username, dbconfig.development.password,{
  host: dbconfig.development.host,
  dialect: dbconfig.development.dialect
});

const db = {}
db.sequelize = sequelize;

db.products = require("./Products.js")(sequelize, Sequelize)
db.Categories = require("./Categories.js")(sequelize, Sequelize)
db.AgeGroup = require("./age_groups.js")(sequelize, Sequelize)


module.exports = db;