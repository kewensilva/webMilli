const { Model, DataTypes } = require('sequelize');
class Product extends Model {

  static init(sequelize) {
    super.init({
      product_name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      inventary: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      img: DataTypes.BLOB('long'),
      last_update_price: DataTypes.DATE,
    },
      {
        sequelize
      });
  }
  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: 'id_category', as: 'category' })
    this.belongsTo(models.Category, { foreignKey: 'id_age_group', as: 'age' })
  }
}
module.exports = Product;
