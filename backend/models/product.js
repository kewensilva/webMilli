'use strict';
const {
  Sequelize,
  Model,
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Product extends Model {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    productName: DataTypes.STRING, 
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    inventary: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    productImg: DataTypes.STRING,
    lastUpdatePrice: DataTypes.DATE,
    categoryProduct: DataTypes.STRING,
    groupAgeProduct: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};