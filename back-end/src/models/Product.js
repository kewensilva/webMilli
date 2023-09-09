const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static init(sequelize) {
    super.init({
      sku: DataTypes.STRING,
      cod_reference: DataTypes.STRING,
      product_name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      stock: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      status_product: DataTypes.BOOLEAN,
      last_update_price: DataTypes.DATE,
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.hasMany(models.Image, { foreignKey: 'product_id', as: 'images' });
    this.belongsToMany(models.Category, { foreignKey: 'product_id', through: 'product_categories', as: 'cat_prod' });
    this.belongsToMany(models.AgeGroup, { foreignKey: 'product_id', through: 'product_ages', as: 'age_prod' });
  }
}

module.exports = Product; 