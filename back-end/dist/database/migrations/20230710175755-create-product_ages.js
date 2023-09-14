"use strict";

// src/database/migrations/20230710175755-create-product_ages.js
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("product_ages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "products", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      age_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "age_groups", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("product_ages");
  }
};
