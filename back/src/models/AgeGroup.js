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
}

module.exports = AgeGroup;