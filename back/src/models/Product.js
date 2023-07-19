const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static init(sequelize) {
    super.init({
      sku: DataTypes.STRING,
      cod_reference: DataTypes.STRING,
      product_name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      inventary: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      img: DataTypes.STRING,
      status_product: DataTypes.BOOLEAN,
      last_update_price: DataTypes.DATE,
    }, {
      sequelize
    })
  }
}

module.exports = Product;