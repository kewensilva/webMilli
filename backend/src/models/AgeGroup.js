const { Model, DataTypes } = require('sequelize');

class age_groups extends Model {
  static init(sequelize) {
    super.init({
      age_group_name: DataTypes.STRING,
      description: DataTypes.STRING
    }, {
      sequelize
    });
  }
}
module.exports = age_groups;