'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sku: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cod_reference: {
        allowNull: false,
        type: Sequelize.STRING
      },
      product_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      inventary: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      // img: {
      //   type: Sequelize.STRING
      // },
      status_product: {
        type: Sequelize.BOOLEAN
      },
      last_update_price: {
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('products');
     
  }
};
