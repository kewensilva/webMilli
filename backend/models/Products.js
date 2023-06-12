'use strict';
const {
  Model
} = require('sequelize');
const { Categories, products } = require('.');
const age_groups = require('./age_groups');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {

    static associations(models) {

      this.belongsTo(models.Categories, {
        foreignKey: 'id_category', as: 'products'
      });
      this.belongsTo(models.age_groups, {
        foreignKey: 'id_group_age', as: 'products'
      });

    }

  }
  Products.init({
    product_name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    inventary: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    img: DataTypes.BLOB,
    last_update_price: DataTypes.DATE,
    id_category: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName:
            Categories
        },
        key: 'id'
      }
    },
    id_group_age: {
      type: DataTypes.INTEGER,
      references: {
        model: { tableName: age_groups },
        key: 'id'
      }
    }
    ,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
    {
      sequelize,
      modelName: 'Products',
    });
  return Products;
};