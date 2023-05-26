
module.exports = (sequelize, DataTypes) => {
    const DataTypes = require('sequelize/lib/data-types');
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    });
  
    return User;
  }