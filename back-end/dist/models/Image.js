// src/models/Image.js
var { Model, DataTypes } = require("sequelize");
var Image = class extends Model {
  static init(sequelize) {
    super.init({
      url: DataTypes.STRING,
      product_id: DataTypes.INTEGER
    }, {
      sequelize
    });
  }
  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: "product_id", as: "images" });
  }
};
module.exports = Image;
