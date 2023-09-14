require("dotenv").config();

module.exports = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "dialect": process.env.DB_DIALECT,
  "dialectModule": process.env.DB_DIALECT2,
  define: {
    timestamps: true,
    underscored: true
  }

};