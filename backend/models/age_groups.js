'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class age_groups extends Model {
    
    static associate(models) {
      this.belongsToMany(models.Products, {
        foreignKey: 'id_group_age', as: 'age_groups'
      }); 
    }
  }
  age_groups.init({
    age_group_name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'age_groups',
  });
  return age_groups;
};