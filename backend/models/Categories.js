'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {

    static associations(models) {

      this.hasMany(models.Products, {
        as: 'Categories', foreignKey: 'id_category'
      });
    }
  }
  Categories.init({
    category_name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categories'
  });
  return Categories;
};