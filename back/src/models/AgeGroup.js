const { Model, DataTypes } = require("sequelize");

class AgeGroup extends Model {
  static init(sequelize) {
    super.init({
      age_name: DataTypes.STRING,
      description: DataTypes.STRING
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsToMany(models.Product, { foreignKey: 'age_id', through: 'product_ages', as: 'age_prod' });
  }

}

module.exports = AgeGroup;