const { Model, DataTypes } = require("sequelize");

class Category extends Model {
  static init(sequelize) {
    super.init({
      category_name: DataTypes.STRING,
      description: DataTypes.STRING
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsToMany(models.Product, { foreignKey: 'category_id', through: 'product_categories', as: 'cat_prod' });
  }
}

module.exports = Category;